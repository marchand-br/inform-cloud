import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Cloud, SignIn, CircleNotch } from "phosphor-react";
import { useForm } from "react-hook-form";
import { AxiosError } from "axios";
import { z } from "zod";

import api from "@/services.api";
import { login } from "@/redux/user-slice";

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
import { useAppDispatch } from "@/redux/store";
import LogoInform from "@/components/LogoInform";



const formSchema = z.object({
    nome  : z.string().min(3, {message: "O nome é obrigatório"}),
    senha : z.string().min(4, {message: "A senha tem que ter no mínimo 4 dígitos"}),
})

type FormData = z.infer<typeof formSchema>

export default function AdmLogin() {
    const { toast } = useToast();
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(false);

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: { 
            nome: "",
            senha: "",
        }
    });
    
    async function onSubmit(data: FormData) {
        try {
            setLoading(true);
            // api.defaults.headers.common['Authorization'] = "Bearer " + token;
            api.defaults.headers.common['secret'] = import.meta.env.VITE_APP_SECRET;

            let response = await api.post('adm/users/login', {
                nome  : data.nome,
                senha : data.senha,
            });

            const dataUser = {
                id: +response.data.id_user,
                token: response.data.token,
                nome: data.nome,
                admin: true,
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

                    <h2 className="text-muted-foreground text-center font-medium text-xl tam-2:text-2xl">
                        Painel Administrativo
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
                                    disabled={loading} 
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