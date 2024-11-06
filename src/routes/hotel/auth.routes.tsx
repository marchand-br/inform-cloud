import { Route } from "react-router-dom";

import HotelLogin from "@hotel/HotelLogin.tsx";
import ErrorPage from "@/pages/ErrorPage";

export default [
    <Route path="/:slug"       element={<HotelLogin />} key={1} />,        
    <Route path="/:slug/*"     element={<ErrorPage />}  key={2} />
]
