import React from "react";
import style from "./style.css"

export default function Header(){
    return(
        <header>
            <div className="esquerda">
                <img src="http://www.ufrpe.br/sites/www.ufrpe.br/files/Logo%20UFRPE%20com%20texto_2.png" />
                <a href="/">
                    <h4>UFRPE</h4>
                    <h1>UNIVERSIDADE FEDERAL RURAL DE PERNAMBUCO</h1>
                    <h4>MINISTÉRIO DA EDUCAÇÃO</h4>
                </a>
            </div>
            <div className="direita">
                <input type="text" placeholder="Buscar..."/>
            </div>
        </header>
    )
}