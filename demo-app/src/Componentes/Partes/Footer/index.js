import React from "react";
import estilo from "./styleFooter.css"

export default function Footer(){
    return(
        <footer>
            <div className="footer"> 
                <div className="box">
                    <h2>UFRPE</h2>
                    <p>Universidade Federal Rural de Pernambuco</p>
                    <p>Rua Dom Manuel de Medeiros, s/n, Dois Irmãos - CEP: 52171-900 - Recife/PE</p>
                </div> 

                <div className="box">
                    <h2>Links Úteis</h2>
                    <p>Transparência Pública </p>
                    <p>Ouvidoria </p>
                    <p>Portal da Transparência </p>
                    <p>Periódicos </p>
                </div> 

                <div className="box">
                    <h2>Redes Sociais</h2>
                    <p>Facebook </p>
                    <p>Instagram </p>
                    <p>Twitter: </p>
                    <p>YouTube </p>
                    <p>Flickr </p>
                    <p>SoundCloud </p>
                </div> 

                <div className="box">
                    <h3>Serviços</h3>
                    <p>Restaurante Universitário </p>
                    <p>SIB - Sistema Integrado de Bibliotecas </p>
                    <p>Editora Universitária </p>
                    <p>Hospital Veterinário </p>
                </div>

            </div>
        </footer>
    )
}