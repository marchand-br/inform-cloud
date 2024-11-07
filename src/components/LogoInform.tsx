import { Cloud } from "phosphor-react";

interface props {
    size?: "small" | "medium";
    center?: boolean;
}

export default function LogoInform({ size = "medium", center = false }: props) {
    const shiftIcon = (size === "small")
        ? "top-[-22px] md:top-[-22px] left-[-26px]" 
        : "top-[-30px] md:top-[-30px] left-[-30px]";

    return (
        <div className={`flex gap-2 relative pb-2 pt-6
            ${ center ? "justify-center" : "" }
        `}>
            <h1 className={`text-card-foreground font-semibold 
                ${ size === "small" ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl" }                
            `}>
                &nbsp; Inform Hotel
            </h1>
            <h1 className={`text-primary opacity-60 font-medium 
                ${ size === "small" ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl" }
            `}>
                Cloud
            </h1>
            <Cloud 
                size={size === "small" ? 32 : 42} weight="bold" 
                className={`text-primary opacity-60 relative ${ shiftIcon }`}
            />                        
        </div>
    )
}