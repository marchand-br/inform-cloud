import { Routes, Route } from "react-router-dom";

import AdmLogin from "@adm/AdmLogin.tsx";

export default function AdmAuthRoutes() {
	return (
        <>
            <Route path="/login" element={<AdmLogin />} />
        </>
	)
}
