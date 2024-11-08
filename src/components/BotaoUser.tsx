import { User, Key, SignOut } from "phosphor-react";
import { Toaster } from 'react-hot-toast';
import { Button } from "./ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "./ui/popover";

import { useAuth } from "@/hooks/use-auth";
import { useAppDispatch } from "@/redux/store";
import { logout } from "@/redux/user-slice";
import ShowDialog from "@/components/ShowDialog";
import { appToast } from "./AppToast";

  
export default function BotaoUser() {
    const dispatch = useAppDispatch();
	const user = useAuth();
    
    function handleLogout() {
        dispatch(logout());
        window.location.reload();
    }

    function handleMudarSenha() {
        appToast("Estamos trabalhando nisso...");
    }

    return (
        <>
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline">
                        <User size={32} weight='bold' />
                    </Button>
                </PopoverTrigger>

                <PopoverContent className="w-80 z-50 bg-popover text-popover-foreground">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">{user.nome}</h4>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>

                    <div className="flex flex-col gap-2 mt-4">
                        <Button variant="outline" onClick={handleMudarSenha}>
                            <Key size={32} />
                            Mudar a Senha
                        </Button>

                        <ShowDialog 
                            title="Vamos sentir sua falta!" 
                            description="Confirma sair do sistema?"
                            handleConfirm={handleLogout}
                        >
                            <Button variant="destructive">  
                                <SignOut size={32} />
                                Sair do Sistema
                            </Button>
                        </ShowDialog>
                    </div>
                </PopoverContent>
            </Popover>

            <Toaster />
        </>
    )
}