import { ReactNode } from 'react'
import { useTheme } from "@/hooks/use-theme";

interface Props {
	children: ReactNode
}

export default function Layout({ children }: Props) {
	const theme = useTheme();
    console.log(theme.color)

    return (
        <div className={`${theme.color} bg-background text-foreground`}>
            { children }
        </div>
    )
}
