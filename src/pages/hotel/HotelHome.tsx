import { useDispatch } from "react-redux";
import { logout } from "@/redux/user-slice";
import { Button } from "@/components/ui/button";

export default function HotelHome() {
    const dispatch = useDispatch();

    function handleLogout() {
        dispatch(logout());
    }

    return (
        <div className="p-10 flex items-center gap-4">
            <h1>Inform Hotel Cloud</h1>
            <Button onClick={handleLogout}>Sair</Button>
        </div>
    )
}