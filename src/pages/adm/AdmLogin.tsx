import { Cloud } from "phosphor-react";

export default function AdmLogin() {
    return (
        <div className="h-screen bg-quarto bg-cover bg-no-repeat flex justify-center md:justify-start" >
            <div className={`
                h-full w-full tam-1:w-[420px] tam-2:w-[520px] bg-card text-center px-8 md:px-16   
                pt-12
                border-x-8 border-x-slate-600 bg-clip-padding border-opacity-10 tam-2:border-l-0

            `}>
                    <div className="flex gap-4 items-center justify-center mb-8">
                        <h1 className="text-card-foreground text-3xl md:text-4xl font-medium">Inform Hotel Cloud</h1>
                        <Cloud size={48} weight="bold" className="text-primary" />
                    </div>
                    <h2 className="text-muted-foreground font-bold text-2xl mb-20">
                        Gerencie seu hotel de forma descomplicada!
                    </h2>
                    <p className="text-card-foreground text-2xl">Acesse sua conta</p>
            </div>
        </div>


    )
}