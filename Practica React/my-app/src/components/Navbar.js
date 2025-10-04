import { useEffect, useState } from "react";
import "./navbar.css";

export function Navbar() {
    const [likes, setLikes] = useState(0);

    const darLike = () => {
        setLikes(likes + 1);
    };

    useEffect(() => {
        console.log("El número de likes cambió:", likes);
    }, [likes]);

    return (
        <div className="body">
            <div>Numero de likes = {likes}</div>

            <div className="contenedor">
                <button className="boton boton1" onClick={darLike}>
                    LIKE{" "}
                </button>
            </div>
        </div>
    );
}
