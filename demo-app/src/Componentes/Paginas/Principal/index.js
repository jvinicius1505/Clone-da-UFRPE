import React from "react";
import Geral from "../../Geral";
import style from "./style.css"

export default function Principal(){
    return(
        <Geral>
            <div className="news">
                <h2>Notícias</h2>
                <div className="noticias">
                    <img src="http://www.ufrpe.br/sites/www.ufrpe.br/files/styles/slideshow_home/public/fundo.jpeg?itok=NFGNpzG8"/>
                    <div >
                        <div className="caixaNews">
                            <h5> Professor da UFRPE comanda Podcast sobre tendências e cenários futuros </h5>
                            <p> 13/05/2022 - 15:53 </p>
                        </div>
                        <div className="caixaNews">
                            <h5> Domingo tem observação do eclipse lunar e atividades astronômicas na UFRPE </h5>
                            <p> 13/05/2022 - 15:10 </p>
                        </div>
                        <div className="caixaNews">
                            <h5> UFRPE realiza o I Ciclo de Minicursos em Práticas Zootécnicas </h5>
                            <p> 13/05/2022 - 10:30 </p>
                        </div>
                        <div className="caixaNews">
                            <h5> Escola de Conselhos de PE debate Plano de Desenvolvimento da Unidade com crianças e adolescentes </h5>
                            <p> 12/05/2022 - 15:35 </p>
                        </div>
                    </div>
                </div>
            </div>
        </Geral>
    )
}