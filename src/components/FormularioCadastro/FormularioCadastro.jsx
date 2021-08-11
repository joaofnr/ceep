import React, { Component } from 'react'
import './style.css'

export default class FormularioCadastro extends Component{
    render(){
        return (
            <form className="form-cadastro">
                <input 
                    className="form-cadastro_input" 
                    type="text" 
                    placeholder="Título" />
                <br />
                <textarea 
                    className="form-cadastro_input" 
                    rows={10} cols={25} 
                    placeholder="Escreva sua nota" />
                <br />
                <button 
                    className="form-cadastro_submit">
                    Criar nota
                </button>
            </form>
        )
    }
}