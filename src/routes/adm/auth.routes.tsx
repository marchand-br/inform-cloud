import { Route } from "react-router-dom";

import AdmLogin from "@adm/AdmLogin.tsx";
import ErrorPage from "@/pages/ErrorPage";

export default [
    <Route path="/adm"       element={<AdmLogin />}  key={1} />,        
    <Route path="/adm/*"     element={<ErrorPage />} key={2} />
]
