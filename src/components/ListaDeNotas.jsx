import React, { Component } from 'react'
import CardNota from './CardNota'

export default class ListaDeNotas extends Component{
    render() {
        return (
            <ul>
              {Array.of("Trabalho", "Casa", "Estudos").map(categoria => {
                  return(
                    <li>
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