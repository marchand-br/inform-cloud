// import { Route, Routes } from "react-router-dom";

import AdmAppRoutes from "./app.routes.tsx";
import AdmAuthRoutes from "./auth.routes.tsx";

export default function AdmRoutes() {
    const idUser = 0;

	return (
        <>
            { idUser ? <AdmAppRoutes /> : <AdmAuthRoutes /> }
        </>
	)
}
