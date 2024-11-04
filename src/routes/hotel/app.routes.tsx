import { Routes, Route } from "react-router-dom";

import HotelHome from "@hotel/HotelHome.tsx";

export default function HotelAppRoutes() {
	return (
        <Routes>
            <Route path="/:slug" element={<HotelHome />} />
        </Routes>
	)
}
