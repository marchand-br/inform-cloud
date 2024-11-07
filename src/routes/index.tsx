import { BrowserRouter, Routes, Route } from "react-router-dom";
import { selectUser } from "@/redux/user-slice";
import ErrorPage from "@/pages/ErrorPage";
import hotelAppRoutes from "./hotel/app.routes";
import hotelAuthRoutes from "./hotel/auth.routes";
import admAppRoutes from "./adm/app.routes";
import admAuthRoutes from "./adm/auth.routes";
import HeroPage from "@/pages/HeroPage";
import { useAppSelector } from "@/redux/store";
import Layout from "@/components/Layout";

export default function AppRoutes() {
    const { id: idUser } = useAppSelector(selectUser);

	return (
		<Layout>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HeroPage />} />
					<Route path="/adm">
						{ idUser ? admAppRoutes : admAuthRoutes }
					</Route>
					<Route path="/:slug">
						{ idUser ? hotelAppRoutes : hotelAuthRoutes }
					</Route>
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</BrowserRouter>
		</Layout>
	)
}
