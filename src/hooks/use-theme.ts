import { useSelector } from "react-redux";
import { selectTheme } from "@/redux/theme-slice";


export function useTheme() { 
    const theme = useSelector(selectTheme);
    return theme;
}