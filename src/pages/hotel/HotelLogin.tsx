import { useParams } from "react-router-dom";

export default function HotelLogin() {
    let { slug } = useParams();

    return (
        <h1>Hotel {slug} Login</h1>
    )
}