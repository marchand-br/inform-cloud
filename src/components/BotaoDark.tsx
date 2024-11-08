import { Palette, Check, X, Sun, Moon } from "phosphor-react";
import { Button } from "./ui/button";
import { Toggle } from "@/components/ui/toggle";
import { Separator } from "@/components/ui/separator";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "./ui/popover";

import { useTheme } from "@/hooks/use-theme";
import { useAppDispatch } from "@/redux/store";
import { useState } from "react";
import { changeTheme } from "@/redux/theme-slice";
import { PopoverClose } from "@radix-ui/react-popover";

interface ColorProps {
    cor: string;
    codCor: string;
    nomeCor: string;
}

export default function BotaoDark() {
    const dispatch = useAppDispatch();
	const theme = useTheme();
    
    const [dark, setDark] = useState(theme.dark);
    const [color, setColor] = useState(theme.name);
    
    function BotaoCor({ cor, nomeCor, codCor }: ColorProps) {
        return (
            <Toggle variant="outline" 
                pressed={color === cor} 
                onPressedChange={() => setColor(cor)}
                className="justify-start text-xs"
            >
                <div className={`p-1 bg-[${codCor}] rounded-full`}>
                    <Check size={24} 
                        className={`text-white ${color !== cor ? "invisible" : "visible"}`}
                    />
                </div>
                {nomeCor}
            </Toggle>
        )
    }

    function handleSalvar() {
        const theme = dark ? 'dark-' + color : 'light-' + color;

        dispatch(changeTheme({
            name : color,
            color : theme,
            dark,
        }))

        // window.location.reload();
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">
                    <Palette size={40} weight='bold' className='text-primary'  />
                </Button>
            </PopoverTrigger>

            <PopoverContent className="w-96">
                <div className="space-y-4">
                    <h4 className="font-medium leading-none">Tema do Sistema</h4>
                    <p className="text-sm text-muted-foreground leading-8">
                        Selecione o tema de sua preferência
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-2">
                    <BotaoCor cor="blue"   nomeCor="Azul"     codCor="#3D82F1" />
                    <BotaoCor cor="red"    nomeCor="Vermelho" codCor="#DB292C" />
                    <BotaoCor cor="green"  nomeCor="Verde"    codCor="#29C566" />
                    <BotaoCor cor="orange" nomeCor="Laranja"  codCor="#E95921" />
                    <BotaoCor cor="yellow" nomeCor="Amarelo"  codCor="#FACC3B" />
                    <BotaoCor cor="violet" nomeCor="Cinza"    codCor="#6D29D4" />
                    <BotaoCor cor="zinc"   nomeCor="Violeta"  codCor="#18181B" />
                </div>

                <Separator />
                <div className="flex gap-2 py-2 justify-center">
                    <Toggle variant="outline" 
                        className="text-xs w-32"
                        pressed={!dark} 
                        onPressedChange={() => setDark(false)}
                    >
                        <Sun size={32} weight="bold" />
                        Claro
                    </Toggle>
                    <Toggle variant="outline" 
                        pressed={dark} 
                        className="text-xs w-32"
                        onPressedChange={() => setDark(true)}
                    >
                        <Moon size={32} weight="bold" />
                        Escuro
                    </Toggle>
                </div>

                <Separator />
                <div className="flex gap-2 mt-4 justify-center">                                               
                    <Button onClick={handleSalvar}>  
                        <Check size={32} weight="bold" />
                        Confirma
                    </Button>
                    <PopoverClose asChild>
                        <Button variant="outline"> 
                            <X size={32} weight="bold" />
                            Cancela
                        </Button>
                    </PopoverClose>
                </div>
            </PopoverContent>
        </Popover>
    )
}