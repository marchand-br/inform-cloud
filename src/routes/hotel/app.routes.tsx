import { Route } from "react-router-dom";

import HotelHome from "@hotel/HotelHome.tsx";
import ErrorPage from "@/pages/ErrorPage";

export default [
    <Route path="/:slug"   element={<HotelHome />} key={1} />,
    <Route path="/:slug/*" element={<ErrorPage />} key={2} />
]
