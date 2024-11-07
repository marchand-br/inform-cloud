import { Palette, Key, Check, X } from "phosphor-react";
import toast, { Toaster } from 'react-hot-toast';
import { Button } from "./ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "./ui/popover";

import { useTheme } from "@/hooks/use-theme";
import { useAppDispatch } from "@/redux/store";
import { logout } from "@/redux/user-slice";
import ShowDialog from "./ShowDialog";

  
export default function BotaoDark() {
    const dispatch = useAppDispatch();
	const theme = useTheme();
    
    function handleSalvar() {
        
        window.location.reload();
    }

    return (
        <>
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline">
                        <Palette size={40} weight='bold' className='text-primary'  />
                    </Button>
                </PopoverTrigger>

                <PopoverContent className="w-80">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">Tema do Sistema</h4>
                        <p className="text-sm text-muted-foreground">
                            Selecione o tema de sua preferência
                        </p>
                    </div>

                    <div className="flex flex-col gap-2 mt-4">                                               
                        <Button>  
                            <Check size={32} />
                            Confirma
                        </Button>
                        <Button variant="outline">
                            <X size={32} />
                            Cancela
                        </Button>
                    </div>
                </PopoverContent>
            </Popover>

            <Toaster />
        </>
    )
}