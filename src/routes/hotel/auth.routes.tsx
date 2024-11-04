import { Route } from "react-router-dom";

import HotelLogin from "@hotel/HotelLogin.tsx";
import ErrorPage from "@/pages/ErrorPage";

export default [
    <Route path="/h/:slug/login" element={<HotelLogin />} key={0} />,
    <Route path="/h/:slug"       element={<HotelLogin />} key={1} />,        
    <Route path="/h/:slug/*"     element={<ErrorPage />}  key={2} />
]
