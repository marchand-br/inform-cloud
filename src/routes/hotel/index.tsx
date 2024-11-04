import { Route, Routes } from "react-router-dom";
import HotelAppRoutes from "./app.routes.tsx";
import HotelAuthRoutes from "./auth.routes.tsx";
import ErrorPage from "@/pages/ErrorPage.tsx";

export default function HotelRoutes() {
    const idUser = 0;

	return (
        <Routes>
            { idUser ? <HotelAppRoutes /> : <HotelAuthRoutes /> }
            <Route path="*" element={<ErrorPage />} />
        </Routes>
	)
}
