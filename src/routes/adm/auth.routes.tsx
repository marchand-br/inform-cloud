import { Routes, Route } from "react-router-dom";

import AdmLogin from "@adm/AdmLogin.tsx";

export default function AdmAuthRoutes() {
	return (
        <Routes>
            <Route path="/login" element={<AdmLogin />} />
        </Routes>
	)
}
