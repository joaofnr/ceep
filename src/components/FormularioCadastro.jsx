import React, { Component } from 'react'

export default class FormularioCadastro extends Component{
    render(){
        return (
            <form>
                <input type="text" placeholder="Título" />
                <br />
                <textarea placeholder="Escreva sua nota" />
                <br />
                <button>Criar nota</button>
            </form>
        )
    }
}