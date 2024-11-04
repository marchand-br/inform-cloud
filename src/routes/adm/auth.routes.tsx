import { Route } from "react-router-dom";

import AdmLogin from "@adm/AdmLogin.tsx";
import ErrorPage from "@/pages/ErrorPage";

export default [
    <Route path="/adm/login" element={<AdmLogin /> } key="/adm/login" />,
    <Route path="/adm"       element={<AdmLogin />}  key="/adm" />,        
    <Route path="/adm/*"     element={<ErrorPage />} key="/adm/*" />
]
