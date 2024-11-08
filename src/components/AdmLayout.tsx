import { ReactNode } from 'react'
import { Buildings, Shield, Users } from 'phosphor-react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from './ui/button';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip";
  
import BotaoUser from './BotaoUser';
import BotaoDark from './BotaoDark';

interface Props {
	children: ReactNode
}


export default function AdmLayout({ children }: Props) {

    return (
        <div className="h-screen w-full">
            <header className={`
                fixed top-0 left-0 right-0 z-10 px-4 bg-background text-foreground 
                border-b-2 border-border/90
                bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60
            `}>
                <div className="flex items-center py-2">
                    <h1 className="flex text-card-foreground font-semibold text-xl md:text-2xl">
                        <Shield size={28} weight="bold" 
                            className="text-primary opacity-60"
                        />
                        &nbsp; Painel Administrativo
                    </h1>

                    <nav className="flex flex-1 gap-1 justify-end">
                        <BotaoDark />
                        <BotaoUser />
                    </nav>
                </div>
            </header>

            <main className="flex">
                <div className={`
                    pt-16 px-2 flex flex-col items-center bg-background text-foreground 
                    border-r-2 border-border/90 gap-2
                `}>
                    {/* menu lateral */}
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button>
                                    <Buildings weight='bold' />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent className='bg-secondary text-secondary-foreground'>
                                <p>Cadastro de Hotéis</p>
                            </TooltipContent>  
                        </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button>
                                    <Users weight='bold' />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent className='bg-secondary text-secondary-foreground'>
                                <p>Cadastro de Usuários</p>
                            </TooltipContent>  
                        </Tooltip>
                    </TooltipProvider>

                </div>

                <ScrollArea className="w-full h-screen overflow-y-auto">
                    { children }
                </ScrollArea>
            </main>
        </div>
    )
}
