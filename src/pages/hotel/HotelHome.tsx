import { logout } from "@/redux/user-slice";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/redux/store";

export default function HotelHome() {
    const dispatch = useAppDispatch();

    function handleLogout() {
        dispatch(logout());
        window.location.reload();
    }

    return (
        <div className="p-10 flex items-center gap-4">
            <h1>Inform Hotel Cloud</h1>
            <Button onClick={handleLogout}>Sair</Button>
        </div>
    )
}