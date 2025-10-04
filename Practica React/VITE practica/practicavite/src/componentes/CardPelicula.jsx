import styles from "./CardPelicula.module.css"
import { Link } from "react-router-dom";
import { getImagen } from "../utils/getImagen";

export function CardPelicula({ pelicula }) {

    return (
        <li>
            <Link className={styles.carta} to={"/peliculas/" + pelicula.id}>
                <span className={styles.titulo}>{pelicula.title}</span>
                <img
                    src={getImagen(pelicula.poster_path,300)}
                />
            </Link>
        </li>
    );
}
