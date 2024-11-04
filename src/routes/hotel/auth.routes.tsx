import { Route } from "react-router-dom";

import HotelLogin from "@hotel/HotelLogin.tsx";
import ErrorPage from "@/pages/ErrorPage";

export default [
    <Route path="/h/:slug/login" element={<HotelLogin />} key="/h/:slug/login" />,
    <Route path="/h/:slug"       element={<HotelLogin />} key="/h/:slug" />,        
    <Route path="/h/:slug/*"     element={<ErrorPage />}  key="/h/:slug/*" />
]
