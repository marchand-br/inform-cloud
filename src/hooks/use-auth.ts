import { selectUser } from "@/redux/user-slice";
import { useAppSelector } from "@/redux/store";


export function useAuth() { 
    const theme = useAppSelector(selectUser);
    return theme;
}