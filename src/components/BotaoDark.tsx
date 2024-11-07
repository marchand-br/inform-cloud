import { Palette, Check, X, Sun, Moon } from "phosphor-react";
import { Button } from "./ui/button";
import { Toggle } from "@/components/ui/toggle"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "./ui/popover";

import { useTheme } from "@/hooks/use-theme";
import { useAppDispatch } from "@/redux/store";
import ShowDialog from "./ShowDialog";
import { useState } from "react";

  
export default function BotaoDark() {
    const dispatch = useAppDispatch();
	const theme = useTheme();
    const [dark, setDark] = useState(theme.dark);
    const [color, setColor] = useState(theme.name);
    
    function handleDark() {

    }

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

                <PopoverContent className="w-96">
                    <div className="space-y-4">
                        <h4 className="font-medium leading-none">Tema do Sistema</h4>
                        <p className="text-sm text-muted-foreground leading-8">
                            Selecione o tema de sua preferência
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-2">
                        <Toggle variant="outline" 
                            pressed={color === "blue"} 
                            onPressedChange={() => setColor("blue")}
                            className="justify-start text-xs"
                        >
                            <div className="p-1 bg-[#3D82F1] rounded-full">
                                <Check size={24} className={`text-white 
                                    ${color == "blue" ? "visible" : "invisible"}`}
                                />
                            </div>
                            Azul
                        </Toggle>
                        <Toggle variant="outline" 
                            pressed={color === "red"} 
                            onPressedChange={() => setColor("red")}
                            className="justify-start text-xs"
                        >
                            <div className="p-1 bg-[#DB292C] rounded-full">
                                <Check size={24} className={`text-white 
                                    ${color == "red" ? "visible" : "invisible"}`}
                                />
                            </div>
                            Vermelho
                        </Toggle>
                        <Toggle variant="outline" 
                            pressed={color === "green"} 
                            onPressedChange={() => setColor("green")}
                            className="justify-start text-xs"
                        >
                            <div className="p-1 bg-[#29C566] rounded-full">
                                <Check size={24} className={`text-white 
                                    ${color == "green" ? "visible" : "invisible"}`}
                                />
                            </div>
                            Verde
                        </Toggle>
                        <Toggle variant="outline" 
                            pressed={color === "orange"} 
                            onPressedChange={() => setColor("orange")}
                            className="justify-start text-xs"
                        >
                            <div className="p-1 bg-[#E95921] rounded-full">
                                <Check size={24} className={`text-white 
                                    ${color == "orange" ? "visible" : "invisible"}`}
                                />
                            </div>
                            Laranja
                        </Toggle>

                        <Toggle variant="outline" 
                            pressed={color === "yellow"} 
                            onPressedChange={() => setColor("yellow")}
                            className="justify-start text-xs"
                        >
                            <div className="p-1 bg-[#FACC3B] rounded-full">
                                <Check size={24} className={`text-white 
                                    ${color == "yellow" ? "visible" : "invisible"}`}
                                />
                            </div>
                            Amarelo
                        </Toggle>

                        <Toggle variant="outline" 
                            pressed={color === "violet"} 
                            onPressedChange={() => setColor("violet")}
                            className="justify-start text-xs"
                        >
                            <div className="p-1 bg-[#6D29D4] rounded-full">
                                <Check size={24} className={`text-white 
                                    ${color == "violet" ? "visible" : "invisible"}`}
                                />
                            </div>
                            Violeta
                        </Toggle>

                        <Toggle variant="outline" 
                            pressed={color === "zinc"} 
                            onPressedChange={() => setColor("zinc")}
                            className="justify-start text-xs"
                        >
                            <div className="p-1 bg-[#18181B] rounded-full">
                                <Check size={24} 
                                    className={`text-white ${color !== "zinc" ? "invisible" : "visible"}`}
                                />
                            </div>
                            Cinza
                        </Toggle>
                    </div>

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

                    <div className="flex gap-2 mt-4 justify-center">                                               
                        <Button className="">  
                            <Check size={32} weight="bold" />
                            Confirma
                        </Button>
                        <Button variant="outline">
                            <X size={32} weight="bold" />
                            Cancela
                        </Button>
                    </div>
                </PopoverContent>
            </Popover>

        </>
    )
}