import { useSelector } from "react-redux";
import { selectTheme } from "@/redux/theme-slice";


export function useTheme() { 
    const theme = useSelector(selectTheme);
    let color = theme.color;

    if (theme.dark) {
        color = 'dark-' + color;
    } else {
        color = 'light-' + color;
    }

    return color;
}