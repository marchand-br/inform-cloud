import { useParams } from "react-router-dom";

export default function HotelHome() {
    let { slug } = useParams();
    
    return (
        <h1>Hotel {slug} Home</h1>
    )
}