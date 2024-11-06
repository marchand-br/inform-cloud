import { useState } from "react";
import { logout } from "@/redux/user-slice";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/redux/store";
import { changeTheme } from "@/redux/theme-slice";
import { useTheme } from "@/hooks/use-theme";

export default function HotelHome() {
    const dispatch = useAppDispatch();
    const [color, setColor] = useState("blue");
    const [dark, setDark] = useState(false);

    function handleLogout() {
        dispatch(logout());
        window.location.reload();
    }

    function handleColor(event: any) {
        setColor(event.target.value);
        const theme = {
            color: event.target.value, 
            dark: false 
        }
        dispatch(changeTheme(theme));
    }

    function handleDark() {
        setDark(prev => !prev);
        console.log(dark)
        const theme = {
            color,
            dark
        }
        dispatch(changeTheme(theme));
    }

    return (
        <div className={`p-10 flex flex-col gap-10 bg-background`}>
            <h1 className="text-card-foreground text-3xl md:text-4xl font-semibold">
                Inform Hotel Cloud
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

            <div>
                <label htmlFor="dark">Tema Escuro?  </label>
                    <input type="checkbox" 
                        name="dark" id="dark" 
                        checked={dark}
                        onChange={handleDark}
                    />
            </div>

            <Button className="w-40" onClick={handleLogout}>Sair</Button>
        </div>
    )
}