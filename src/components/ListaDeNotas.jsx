import React, { Component } from 'react'
import CardNota from './CardNota/CardNota'

export default class ListaDeNotas extends Component{
    render() {
        return (
            <ul>
              {Array.of("Trabalho", "Casa", "Estudos").map((categoria, index) => {
                  return(
                    <li key={index}>
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