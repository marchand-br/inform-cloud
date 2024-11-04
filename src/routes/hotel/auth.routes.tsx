import { Routes, Route } from "react-router-dom";

import HotelLogin from "@hotel/HotelLogin.tsx";

export default function HotelAuthRoutes() {
	return (
        <Routes>
            <Route path="/:slug/login" element={<HotelLogin />} />
        </Routes>
	)
}
