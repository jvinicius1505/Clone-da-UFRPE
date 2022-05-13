import React from "react";
import style from "./style.css"

import Header from "../Partes/Header";
import Aside from "../Partes/Aside";
import Footer from "../Partes/Footer";

export default function Geral(props){
    return(
        <div>
            <Header/>
                <div className="caixa">
                    <Aside />
                    <div className="conteudo">
                        {props.children}
                    </div>
                </div> 
            <Footer />
        </div>

    );
}