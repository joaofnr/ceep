import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas';
import './assets/App.css'

export default class App extends Component {

  // função para criar a nota que poder ser
  // chamada internamente em algum componente
  criarNota(titulo, texto){
    console.log(`Criar nota -  ${titulo}: ${texto}`)
  }

  // tudo que estiver dentro do render() será
  // retornado para a tela.
  // o react foi pensado para ser componentizado,
  // fazendo vários arquivos pequenos ao invés de
  // arquivos grandes com muitos elementos.

  // Ao definir um componente, podemos passar propriedades
  // que quisermos para o mesmo.
  // Isso é uma injeção de dependência
  render () { 
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota} />
        <ListaDeNotas />
      </section>
    )
  };
}