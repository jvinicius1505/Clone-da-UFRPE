import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"
import Principal from "../Componentes/Paginas/Principal";
import Departamentos from "../Componentes/Paginas/Departamentos";
import Proreitorias from "../Componentes/Paginas/Proreitorias";
import Unidades from "../Componentes/Paginas/Unidades";

export default function Rotas(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Principal />}/>
                <Route path="/unidades" element={<Unidades />}/>
                <Route path="/proreitorias" element={<Proreitorias />}/>
                <Route path="/departamentos" element={<Departamentos />}/>
            </Routes>
        </Router>
    );
}
