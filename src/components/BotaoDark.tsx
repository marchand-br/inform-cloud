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
                className="justify-start text-xs text-foreground"
            >
                <div className={`p-1 ${codCor} rounded-full`}>
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
        }));
        // window.location.reload();
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">
                    <Palette size={40} weight='bold' />
                </Button>
            </PopoverTrigger>

            <PopoverContent className={`w-96 ${theme.color}`}> 
                <div className="space-y-4">
                    <h4 className="font-medium leading-none">Tema do Sistema</h4>
                    <p className="text-sm text-muted-foreground leading-8">
                        Selecione o tema de sua preferência
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-2">
                    <BotaoCor cor="blue"   nomeCor="Azul"     codCor="bg-blue-600" />
                    <BotaoCor cor="red"    nomeCor="Vermelho" codCor="bg-red-600" />
                    <BotaoCor cor="green"  nomeCor="Verde"    codCor="bg-green-700" />
                    <BotaoCor cor="orange" nomeCor="Laranja"  codCor="bg-orange-500" />
                    <BotaoCor cor="yellow" nomeCor="Amarelo"  codCor="bg-yellow-400" />
                    <BotaoCor cor="violet" nomeCor="Cinza"    codCor="bg-zinc-800" />
                    <BotaoCor cor="zinc"   nomeCor="Violeta"  codCor="bg-violet-600" />
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