import { ReactNode } from 'react'
import { Shield } from 'phosphor-react';
import BotaoUser from './BotaoUser';
import BotaoDark from './BotaoDark';

interface Props {
	children: ReactNode
}

export default function AdmLayout({ children }: Props) {

    return (
        <div className="h-screen w-full">
            <header className={`
                sticky top-0 z-50 px-4 border-b-2 border-border/40 bg-background/95 
                backdrop-blur supports-[backdrop-filter]:bg-background/60
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

            <main className='flex'>
                <div className='w-12'>
                    {/* menu lateral */}
                </div>
                <div className="w-full">
                    { children }
                </div>
            </main>
        </div>
    )
}
