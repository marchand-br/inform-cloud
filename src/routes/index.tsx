import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/user-slice";
import ErrorPage from "@/pages/ErrorPage";
import hotelAppRoutes from "./hotel/app.routes";
import hotelAuthRoutes from "./hotel/auth.routes";
import admAppRoutes from "./adm/app.routes";
import admAuthRoutes from "./adm/auth.routes";


export default function InformRoutes() {
    const { id: idUser } = useSelector(selectUser);
	
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/h/:slug">
					{ idUser ? hotelAppRoutes : hotelAuthRoutes }
				</Route>
				<Route path="/adm">
					{ idUser ? admAppRoutes : admAuthRoutes }
				</Route>
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	)
}
