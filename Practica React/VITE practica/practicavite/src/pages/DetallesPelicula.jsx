import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../data/httpClient";
import { getImagen } from "../utils/getImagen";
import "./DetallesPelicula.css"

export function DetallesPelicula() {
    const { peliculaId } = useParams();
    console.log(peliculaId);

    const [pelicula, setPelicula] = useState([]);
    useEffect(() => {
        get("/movie/" + peliculaId).then((datos) => {
            setPelicula(datos);
            console.log("los datos son:", datos);
        });
    }, [peliculaId]);
    
    console.log("pelicula:", {pelicula});
    
    
    const imageUrl = getImagen(pelicula.poster_path, 300);

    return (
        <div className="contenedor-detalles">
            <div>
                <img src={imageUrl}></img>
            </div>
            <div className="texto">
                <h1>{pelicula.title}</h1>
                <span> <strong>Genero:</strong>  {pelicula?.genres?.map((g)=>g.name).join(", ")}</span>
                <p><strong>Titulo: </strong>{pelicula.title}</p>
                <p><strong>Reseña: </strong>{pelicula.overview}</p>
                <p><strong>Fecha de emision:</strong> {pelicula.release_date}</p>
            </div>
        </div>
    );
}
