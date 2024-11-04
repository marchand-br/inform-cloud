import { Routes, Route } from "react-router-dom";

import AdmHome from "@adm/AdmHome.tsx";

export default function AdmAppRoutes() {
	return (
        <>
            <Route path="/" element={<AdmHome />} />
        </>
	)
}
