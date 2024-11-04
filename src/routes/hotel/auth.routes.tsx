import { Routes, Route } from "react-router-dom";

import HotelLogin from "@hotel/HotelLogin.tsx";

export default function HotelAuthRoutes() {
	return (
        <Routes>
            <Route path="/login" element={<HotelLogin />} />
        </Routes>
	)
}
