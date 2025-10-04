import { useState } from "react";
import { MyRoutes } from "./routers/routes";

import "./App.css";

export function App() {
    return (
        <div>
            <header>
                <h1>🎬 Peliculas 🎬</h1>
            </header>
            <MyRoutes/>
        </div>
    );
}
