import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Cloud, SignIn, CircleNotch } from "phosphor-react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AxiosError } from "axios";
import { z } from "zod";

import api from "@/services.api";
import { login } from "@/redux/user-slice";
import { setHotel } from "@/redux/hotel-slice";
import { useAppDispatch } from "@/redux/store";
import { emptyObject } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";


const formSchema = z.object({
    nome  : z.string().min(3, {message: "O nome é obrigatório"}),
    senha : z.string().min(4, {message: "A senha tem que ter no mínimo 4 dígitos"}),
})

type FormData = z.infer<typeof formSchema>

export default function HotelLogin() {
    const { toast } = useToast();
    const dispatch = useAppDispatch(); // useDispatch<AppDispatch>();
    const { slug } = useParams();

    const [id_hotel, setId_hotel] = useState(0);
    const [loading, setLoading] = useState(false);
    const [bloqueado, setBloqueado] = useState(false);
    const [ativo, setAtivo] = useState(true);

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: { 
            nome: "",
            senha: "",
        }
    });

    async function getHotel(slug: string) {
        let titleError = "";

        try {
            setLoading(true);
            const response = await api.get(`adm/clientes/slug/${slug}`, {
                headers: { 
                    'secret': import.meta.env.VITE_APP_SECRET,                    
                }
            });

            setLoading(false);

            if (emptyObject(response?.data)) {
                setAtivo(false);
                throw new Error(`Hotel (${slug}) não localizado.`);
            }

            if (response.data.ativo !== "S") {
                setAtivo(false);
                titleError = `Hotel (${slug}) inativo.`;            
                throw new Error("Entre em contato com a Marchand");
            }

            if (response.data.bloqueado === "S") {
                setBloqueado(true);
                titleError = `Hotel ${slug} bloqueado.`;
                throw new Error("Entre em contato com a Marchand");
            }

            setId_hotel(response.data.id_hotel);
            dispatch(setHotel(response.data));
        }
        catch (error) {
            let message = String(error);
            console.log(error);
            setLoading(false);
            
            if (error instanceof AxiosError) 
                message = error.response?.data.message;

            message = message.replace('Error:', '');

            toast({
                variant: "destructive",
                title: titleError || "Erro ao buscar dados do hotel",
                description: message,
            })
        }
    }

    useEffect(() => {        
        getHotel(slug!);

    }, [])
    
    
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

            toast({
                variant: "destructive",
                title: "Erro ao fazer Login",
                description: message,
            })
        }
    }

    return (
        <div 
            aria-label="Foto de Nik Lanús extraída do site Unsplash"
            className={`
                h-screen bg-quarto bg-cover bg-no-repeat flex 
                justify-center md:justify-start
            `}
        >
            <div className={`
                h-screen w-full bg-card flex flex-col justify-between 
                tam-1:w-[420px] tam-2:w-[520px] transition-all duration-300
                pt-10 pb-8 px-7 tam-2:px-16 
                border-x-8 border-x-slate-600 bg-clip-padding border-opacity-5 md:border-l-0 
            `}>
                <div className="my-8">
                    <div className="flex items-center justify-center mb-8 gap-2 relative text-center">
                        <h1 className="text-card-foreground text-3xl md:text-4xl font-semibold">
                            &nbsp; Inform Hotel
                        </h1>
                        <h1 className="text-primary opacity-60 text-3xl md:text-4xl font-medium">
                            Cloud
                        </h1>
                        <Cloud 
                            size={42} weight="bold" 
                            className="text-primary opacity-60 relative top-[-28px] md:top-[-30px] left-[-30px]" 
                        />                        
                    </div>

                    <h2 className="text-muted-foreground text-center font-medium text-lg tam-2:text-xl">
                        Gerencie seu hotel de forma descomplicada!
                    </h2>
                </div>
                
                <div className="flex flex-1 flex-col">
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
                                        <FormLabel>Nome do usuário</FormLabel>
                                        <FormControl>
                                            <Input {...field} 
                                                placeholder="Nome"  
                                                className="shadow-md" 
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
                                        <FormLabel>Senha</FormLabel>
                                        <FormControl>
                                            <Input {...field}       
                                                type="password" 
                                                placeholder="Senha" 
                                                className="shadow-md"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="flex">
                                <Button type="submit" 
                                    disabled={loading || bloqueado || !ativo} 
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