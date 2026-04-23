// src/components/Navbar.jsx
import { useNavigate } from "react-router-dom";
import { API } from "../services/api";

export default function Navbar() {
    const navigate = useNavigate();

    const logout = async () => {
        await API.post("/users/logout");
        navigate("/");
    };

    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 20px",
            background: "black",
            color: "white"
        }}>
            <h3>Real-e Notes</h3>
            <button onClick={logout} style={{width: "100px"}}>Logout</button>
        </div>
    );
}