import React from "react";
import Geral from "../../Geral";
import style from "./stylePro.css"

export default function Proreitorias(){
    return(
        <Geral>
            <h1>Pró Reitorias</h1>

            <p className="info">As Pró-Reitorias são responsáveis pela coordenação de atividades específicas dentro do funcionamento universitário. Na UFRPE, seis Pró-Reitorias administram setores diferentes.</p>

            <div className="proreit"> 
                <div className="caixaP">
                    <h4> Pró-Reitoria de Ensino de Graduação - PREG </h4>
                    <p>Pró-reitora: </p>
                    <p>E-mail: </p>
                    <p>Web-site: </p>
                </div> 

                <div className="caixaP">
                    <h4> Pró-Reitoria de Pós-Graduação - PRPPG  </h4>
                    <p>Pró-reitora: </p>
                    <p>E-mail: </p>
                    <p>Web-site: </p>
                </div> 

                <div className="caixaP">
                    <h4> Pró-Reitoria de Extensão, Cultura e Cidadania - PROEXC  </h4>
                    <p>Pró-reitora: </p>
                    <p>E-mail: </p>
                    <p>Web-site: </p>
                </div> 

                <div className="caixaP">
                    <h4> Pró-Reitoria de Gestão Estudantil e Inclusão - PROGESTI  </h4>
                    <p>Pró-reitora: </p>
                    <p>E-mail: </p>
                    <p>Web-site: </p>
                </div> 

                <div className="caixaP">
                    <h4> Pró-Reitoria de Gestão de Pessoas - PROGEPE </h4>
                    <p>Pró-reitora: </p>
                    <p>E-mail: </p>
                    <p>Web-site: </p>
                </div>

            </div>
        </Geral>
    )
}