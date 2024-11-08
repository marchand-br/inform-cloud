import { ReactNode } from 'react'
import { Shield } from 'phosphor-react';
import { ScrollArea } from "@/components/ui/scroll-area";
import BotaoUser from './BotaoUser';
import BotaoDark from './BotaoDark';

interface Props {
	children: ReactNode
}

export default function AdmLayout({ children }: Props) {

    return (
        <div className="h-screen w-full">
            <header className={`
                sticky top-0 z-10 px-4 max-h-[70px] border-b-2 border-border/40 text-foreground
                bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60
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
                <div className='w-16'>
                    {/* menu lateral */}
                </div>
                <ScrollArea className="h-screen max-h-[calc(100vh-70px)] overflow-y-auto">
                    { children }
                </ScrollArea>
            </main>
        </div>
    )
}
