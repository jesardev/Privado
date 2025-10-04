import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import {LandingPage} from "../pages/LandingPage"
import {DetallesPelicula} from "../pages/DetallesPelicula"

export function MyRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/peliculas/:peliculaId" element={<DetallesPelicula/>}></Route>
            </Routes>
        </Router>
    )
}
