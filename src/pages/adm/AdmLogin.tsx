import { zodResolver } from "@hookform/resolvers/zod";
import { Cloud, SignIn } from "phosphor-react";
import { useForm } from "react-hook-form";
import { AxiosError } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { z } from "zod";

import api from "@/services.api";
import { login, selectUser } from "@/redux/user-slice";

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

export default function AdmLogin() {
    const { toast } = useToast();
    const dispatch = useDispatch();

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: { 
            nome: "",
            senha: "",
        }
    });
    
    async function onSubmit(data: FormData) {
        try {
            // api.defaults.headers.common['Authorization'] = "Bearer " + token;
            api.defaults.headers.common['secret'] = import.meta.env.VITE_APP_SECRET;

            const response = await api.post('adm/users/login', {
                nome  : data.nome,
                senha : data.senha,
            });

            dispatch(login({
                id: +response.data.id_user,
                token: response.data.token,
                nome: data.nome,
            }));
        } 
        catch (error) {
            let message = String(error);
            console.log(error);

            if (error instanceof AxiosError) 
                message = error.response?.data.message;

            toast({
                variant: "destructive",
                title: "Erro ao fazer Login",
                description: message,
            })
        }
    }

    // console.log(useSelector((state: any) => state.user))
    console.log(useSelector(selectUser));

    return (
        <div className="h-screen bg-quarto bg-cover bg-no-repeat flex justify-center md:justify-start" 
            aria-label="Foto de Nik Lanús extraída do site Unsplash"
        >
            <div className={`
                h-screen w-full bg-card flex flex-col justify-between 
                tam-1:w-[420px] tam-2:w-[520px] 
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
                        <p className="text-card-foreground text-xl tam-2:text-2xl font-medium text-center ">
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
                                                placeholder="Nome..."  
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
                                                placeholder="Senha..." 
                                                className="shadow-md"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="flex">
                                <Button type="submit" className="uppercase flex-1 mt-8">
                                    <SignIn size={32} />
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