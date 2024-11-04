import { Routes, Route } from "react-router-dom";

import AdmHome from "@adm/AdmHome.tsx";

export default function AdmAppRoutes() {
	return (
        <Routes>
            <Route path="/" element={<AdmHome />} />
        </Routes>
	)
}
