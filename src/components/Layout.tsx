import { ReactNode } from 'react'
import { useTheme } from "@/hooks/use-theme";

interface Props {
	children: ReactNode
}

export default function Layout({ children }: Props) {
	const theme = useTheme();
    console.log(theme.color)

    return (
        <div className={`bg-background text-foreground color-scheme=${theme.color}`}>
            { children }
        </div>
    )
}
