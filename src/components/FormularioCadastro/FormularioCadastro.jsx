import React, { Component } from 'react'
import './style.css'
class FormularioCadastro extends Component{

    constructor(){
        super()
        this.titulo = ""
    }

    handleMudancaTitulo(e){
        this.titulo = e.target.value
        console.log(this.titulo)
    }

    render(){
        return (
            <form className="form-cadastro">
                <input 
                    className="form-cadastro_input" 
                    type="text" 
                    placeholder="Título"
                    onChange={this.handleMudancaTitulo.bind(this)}
                    />
                <textarea 
                    className="form-cadastro_input" 
                    rows={10} cols={25} 
                    placeholder="Escreva sua nota" />
                <button 
                    className="form-cadastro_submit">
                    Criar nota
                </button>
            </form>
        )
    }
}
export default FormularioCadastro