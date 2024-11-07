import { ReactNode } from 'react'
import LogoInform from './LogoInform';
import BotaoUser from './BotaoUser';

interface Props {
	children: ReactNode
}

export default function HotelLayout({ children }: Props) {

    return (
        <div className={`h-screen w-full`}>
            <header className={`
                sticky top-0 z-50 w-full px-4 border-b-2 border-border/40 bg-background/95 
                backdrop-blur supports-[backdrop-filter]:bg-background/60
            `}>
                <div className="flex items-center">
                    <LogoInform size="small" />

                    <nav className="flex flex-1 justify-end">
                        <BotaoUser />
                    </nav>
                </div>
            </header>

            <main className='flex'>
                <div>
                    {/* menu lateral */}
                </div>
                
                { children }
            </main>
        </div>
    )
}



// sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border
