import { selectTheme } from "@/redux/theme-slice";
import { useAppSelector } from "@/redux/store";


export function useTheme() { 
    const theme = useAppSelector(selectTheme);
    return theme;
}