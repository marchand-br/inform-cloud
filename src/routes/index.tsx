import { BrowserRouter, Routes, Route } from "react-router-dom";

import HotelRoutes from "./hotel"
import AdmRoutes from "./adm"
import ErrorPage from "@/pages/ErrorPage";

export default function InformRoutes() {
	const id_user = 0;
	
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/h/:slug" element={<HotelRoutes />} />
				<Route path="/adm" element={<AdmRoutes />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	)
}
