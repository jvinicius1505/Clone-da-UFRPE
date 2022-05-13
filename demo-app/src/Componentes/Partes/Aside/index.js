import React from "react";
import { Link } from 'react-router-dom'
import style from "./style.css"

export default function Aside(){
    return(
        <aside>   
            <h3>INSTITUCIONAL</h3> 
            <Link to="/" > Principal </Link>
            <Link to="/departamentos"> Departamentos </Link>
            <Link to="/proreitorias"> Pró Reitorias </Link>
            <Link to="/unidades"> Unidades Academicas </Link>
        </aside>
    )
}