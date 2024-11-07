import { useState } from "react";
import { logout } from "@/redux/user-slice";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/redux/store";
import { changeTheme } from "@/redux/theme-slice";
import { useTheme } from "@/hooks/use-theme";
import AdmLayout from "@/components/AdmLayout";

export default function AdmHome() {
    const dispatch = useAppDispatch();
	const theme = useTheme();

    const [color, setColor] = useState(theme.name);
    const [dark, setDark] = useState(theme.dark ? 'dark' : 'light');

    function handleLogout() {
        dispatch(logout());
        window.location.reload();
    }

    function handleColor(event: any) {
        const themeName: string = event?.target.value;
        const themeColor = dark + "-" + themeName;

        setColor(themeName);

        const theme = {
            name  : themeName,
            color : themeColor,
            dark  : dark === 'dark'
        }

        dispatch(changeTheme(theme));
    }

    function handleDark(event: any) {
        const dark = event?.target.value;
        const themeColor = dark + "-" + color;

        setDark(dark);
        
        const theme = {
            name  : color,
            color : themeColor,
            dark  : dark === 'dark'
        }

        dispatch(changeTheme(theme));
    }

    return (
        <AdmLayout>
            <div className={`h-screen p-10 flex flex-col gap-10`}>
                <h1 className="text-3xl md:text-4xl font-semibold">
                    Painel Administrativo
                </h1>

                <div className="flex flex-col">
                    <label htmlFor="color">Selecione a cor:</label>
                    <select 
                        name="color" id="color" 
                        className="w-40" 
                        value={color} 
                        onChange={handleColor}
                    >
                        <option value="blue">Azul</option>
                        <option value="red">Vermelho</option>
                        <option value="green">Verde</option>
                        <option value="yellow">Amarelo</option>
                        <option value="orange">Laranja</option>
                        <option value="violet">Violeta</option>
                        <option value="zinc">Zinco</option>
                    </select>
                </div>

                <div className="flex flex-col text-foreground">
                    <label htmlFor="dark">Tipo de tema:</label>
                    <select 
                        name="dark" id="dark" 
                        className="w-40" 
                        value={dark} 
                        onChange={handleDark}
                    >
                        <option value="light">Tema claro</option>
                        <option value="dark">Tema escuro</option>
                    </select>
                </div>

                <Button className="w-40" onClick={handleLogout}>Sair</Button>
            </div>
        </AdmLayout>
    )
}