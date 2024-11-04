import { BrowserRouter, Routes, Route } from "react-router-dom";

import HotelRoutes from "./hotel"
import AdmRoutes from "./adm"

export default function InformRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HotelRoutes />} />
				<Route path="/adm" element={<AdmRoutes />} />
			</Routes>
		</BrowserRouter>
	)
}
