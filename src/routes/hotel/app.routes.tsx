import { Route } from "react-router-dom";

import HotelHome from "@hotel/HotelHome.tsx";
import ErrorPage from "@/pages/ErrorPage";

export default [
        <Route path="/h/:slug"   element={<HotelHome />} key={0} />,
        <Route path="/h/:slug/*" element={<ErrorPage />} key={1} />
]
