import { ReactNode } from 'react'
import { User } from 'phosphor-react';
import LogoInform from './LogoInform';
import { Button } from './ui/button';

interface Props {
	children: ReactNode
}

export default function AdmLayout({ children }: Props) {

    return (
        <div className={`h-screen w-full`}>
            <header className={`
                sticky top-0 z-50 w-full px-4 border-b-2 border-border/40 bg-background/95 
                backdrop-blur supports-[backdrop-filter]:bg-background/60
            `}>
                <div className="flex items-center">
                    <LogoInform size="small" />

                    <nav className="flex flex-1 justify-end">
                        <Button variant="outline" className=''>
                            <User size={64} weight='bold' className='text-primary'  />
                        </Button>
                    </nav>
                </div>
            </header>

            <main>
                { children }
            </main>
        </div>
    )
}



// sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border
