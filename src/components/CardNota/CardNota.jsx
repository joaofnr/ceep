import React, { Component } from 'react'
import "./style.css"

export default class CardNota extends Component{
    // como passamos os atributos titulo e texto
    // no componente pai, usamos o this.props para
    // trazer os valores neste componente
    render () {
        return (
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">{this.props.titulo}</h3>
                </header>
                <p className="card-nota_texto">{this.props.texto}</p>
            </section>
        )
    }
}