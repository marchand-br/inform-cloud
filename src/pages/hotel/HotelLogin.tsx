import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignIn, CircleNotch } from "phosphor-react";
import { useAppDispatch } from "@/redux/store";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { AxiosError } from "axios";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import api from "@/services.api";
import { login } from "@/redux/user-slice";
import { selectHotel, getHotelStatus, getHotelError, fetchHotel } from "@/redux/hotel-slice";
import LogoInform from "@/components/LogoInform";
import { appToast } from "@/components/AppToast";


const formSchema = z.object({
    nome  : z.string().min(3, {message: "O nome é obrigatório"}),
    senha : z.string().min(4, {message: "A senha tem que ter no mínimo 4 dígitos"}),
})

type FormData = z.infer<typeof formSchema>

export default function HotelLogin() {
    const dispatch = useAppDispatch(); // useDispatch<AppDispatch>();
    const { slug } = useParams();

    const hotelData = useSelector(selectHotel);
    const hotelStatus = useSelector(getHotelStatus);
    const hotelError = useSelector(getHotelError);

    const [id_hotel, setId_hotel] = useState(0);
    const [loading, setLoading] = useState(false);

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: { 
            nome: "",
            senha: "",
        }
    });

    useEffect(() => {        
        if (hotelStatus === 'idle') {
            setLoading(true);
            dispatch(fetchHotel(slug!));
            setLoading(false);
        }

        if (hotelStatus === 'failed') {
            appToast(hotelError, "danger");
        } 
        else if (hotelStatus === 'succeeded') {
            setId_hotel(hotelData.id_hotel);
        }
    }, [hotelStatus, dispatch])
    
    
    async function onSubmit(data: FormData) {
        try {
            setLoading(true);
            let response = await api.post('hotel/users/login', 
                {
                    nome  : data.nome,
                    senha : data.senha,
                }, 
                {
                    params: { id_hotel }
                }
            );

            const dataUser = {
                id    : +response.data.id_user,
                token : response.data.token,
                email : response.data.email,
                nome  : data.nome,
                admin : false,
            }

            dispatch(login(dataUser));
            setLoading(false);
        } 
        catch (error) {
            let message = String(error);
            console.log(error);
            setLoading(false);
            
            if (error instanceof AxiosError) 
                message = error.response?.data.message;

            appToast(message, "danger", 'bottom-right');
        }
    }

    return (
        <div 
            aria-label="Foto de Nik Lanús extraída do site Unsplash"
            className="h-screen bg-quarto bg-cover bg-no-repeat flex justify-center md:justify-start"
        >
            <div className={`
                h-screen w-full bg-card flex flex-col justify-between
                tam-1:w-[420px] tam-2:w-[520px] transition-all duration-300
                pt-10 pb-8 
                border-x-8 border-x-slate-600 bg-clip-padding border-opacity-5 md:border-l-0 
            `}>
                <div className="mb-8">
                    <div className="mt-2 mb-8">
                        <LogoInform center />
                    </div>

                    <h2 className="text-muted-foreground text-center font-medium px-8 tam-2:px-16 text-lg tam-2:text-xl">
                        Gerencie seu hotel de forma descomplicada!
                    </h2>
                </div>
                
                <div className="flex flex-1 flex-col px-8 tam-2:px-16">
                    <div className="my-4">
                        <p className="text-card-foreground text-lg tam-2:text-xl font-medium text-center ">
                            Acesse sua conta
                        </p>
                    </div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2">
                            <FormField
                                control={form.control}
                                name="nome"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-foreground">
                                            Nome do usuário
                                        </FormLabel>
                                        <FormControl>
                                            <Input {...field} 
                                                placeholder="Nome"  
                                                className="text-foreground shadow-md" 
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="senha"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-foreground">Senha</FormLabel>
                                        <FormControl>
                                            <Input {...field}       
                                                type="password" 
                                                placeholder="Senha" 
                                                className="text-foreground shadow-md"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="flex">
                                <Button type="submit" 
                                    disabled={hotelStatus !== 'succeeded'} 
                                    className="uppercase flex-1 mt-8"
                                >
                                    {loading
                                        ? <CircleNotch size={32} className="animate-spin" />
                                        : <SignIn size={32} />
                                    }
                                    Entrar
                                </Button>                                
                            </div>
                        </form>
                    </Form>
                </div>

                <Button asChild variant="link">
                    <a href="/esqueci" className="text-primary pt-4 text-center">
                        Esqueceu a sua senha? Clique aqui!
                    </a>
                </Button>
            </div>

            <Toaster />
        </div>
    )
}