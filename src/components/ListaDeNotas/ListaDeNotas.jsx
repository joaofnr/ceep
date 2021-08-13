import React, { Component } from 'react'
import CardNota from '../CardNota'
import './style.css'

export default class ListaDeNotas extends Component{
    // para percorrer uma lista de elementos dentro do HTML no JSX,
    // podemos usar o módulo Array juntamente com o map.
    // Não é possível juntar for ou foreach com HTML no JSX, como
    // é comum no vanilla JS ou libs como jQuery.

    // o index de um elemento pode ser referenciado automaticamente e,
    // dentro do map, o react pede para usar o atributo key,
    // para identificar o elemento unicamente dentro do loop
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