import React, { Component } from 'react'
import './style.css'
// usando classes em JS! |m|_
class FormularioCadastro extends Component{

    // por extender uma classe, o método construtor
    // deve chamar super(). Aqui podem ser definidas
    // as propriedades da classe

    // o atributo props vem do componente a qual este pertence,
    // no caso App.js, que podemos usar para passar os valores
    // desta classe para a outra
    constructor(props){
        super(props)
        this.titulo = "";
        this.texto = ""
    }

    // boas práticas de usar _ no começo para
    // tratar o método como privado 
    // (não modifica o acesso, é apenas conveção)
    _handleMudancaTitulo(e){
        e.stopPropagation()
        this.titulo = e.target.value
        console.log(this.titulo)
    }

    _handleMudancaTexto(e){
        e.stopPropagation()
        this.texto = e.target.value
    }

    // o criarNota foi injetado nas props pelo componente pai,
    // tornando assim possível chamar uma função que não pertence
    // a esta classe
    _criarNota(e){
        e.preventDefault()
        e.stopPropagation()
        this.props.criarNota(this.titulo, this.texto)
    }

    // os métodos de eventos de um elemento HTML
    // podem chamar funções da classe a qual pertencem, 
    // desde que seja usado o .bind para vincular o
    // element ao método usando this
    render(){
        return (
            <form className="form-cadastro"
                onSubmit={this._criarNota.bind(this)}
            >
                <input 
                    className="form-cadastro_input" 
                    type="text" 
                    placeholder="Título"
                    onChange={this._handleMudancaTitulo.bind(this)}
                    />
                <textarea 
                    className="form-cadastro_input" 
                    rows={10} cols={25} 
                    placeholder="Escreva sua nota"
                    onChange={this._handleMudancaTexto.bind(this)} />
                <button 
                    className="form-cadastro_submit">
                    Criar nota
                </button>
            </form>
        )
    }
}
export default FormularioCadastro