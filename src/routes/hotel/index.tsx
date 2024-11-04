import { Route, Routes } from "react-router-dom";

import HotelAppRoutes from "./app.routes.tsx";
import HotelAuthRoutes from "./auth.routes.tsx";

export default function HotelRoutes() {
    const idUser = 0;

	return (
        <Routes>
            <Route path = "/h">
                { idUser ? <HotelAppRoutes /> : <HotelAuthRoutes /> }
            </Route>
        </Routes>
	)
}
