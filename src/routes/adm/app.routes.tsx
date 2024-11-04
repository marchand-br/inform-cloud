import { Route } from "react-router-dom";

import AdmHome from "@adm/AdmHome.tsx";
import ErrorPage from "@/pages/ErrorPage";

export default [
    <Route path="/adm"   element={<AdmHome />}   key={0} />,
    <Route path="/adm/*" element={<ErrorPage />} key={1} />
]
