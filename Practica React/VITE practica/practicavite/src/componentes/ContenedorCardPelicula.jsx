import { get } from "../data/httpClient";
import { useEffect, useState } from "react";
import { CardPelicula } from "./CardPelicula";
import "./ContenedorCardPelicula.css";

export function ContenedorCardPelicula() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        get("/discover/movie").then((data) => {
            setMovies(data.results);
            console.log("resultados", data.results);
        });
    }, []);

    return (
        <div>
            <h2>Te amo mi Valeria Jarita ❤️</h2>
            <ul className="contenedor">
                {movies.map((pelicula) => (
                    <CardPelicula key={pelicula.id} pelicula={pelicula} />
                ))}
            </ul>
        </div>
    );
}
