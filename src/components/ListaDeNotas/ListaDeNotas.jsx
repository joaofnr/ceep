import React, { Component } from 'react'
import CardNota from '../CardNota'
import './style.css'

export default class ListaDeNotas extends Component{
    render() {
        return (
            <ul 
              className="lista-notas">
              {Array.of("Trabalho", "Casa", "Estudos").map((categoria, index) => {
                  return(
                    <li 
                      key={index}
                      className="lista-notas_item"
                      >
                      <div>{categoria}</div>
                      <CardNota />
                    </li>
                  )
                }
              )}
              
            </ul>
        )
    }
}