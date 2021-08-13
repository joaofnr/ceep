import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas';
import './assets/App.css'

export default class App extends Component {

  constructor(){
    super()
    this.notas = []
  }

  // função para criar a nota será
  // chamada internamente em algum componente
  // cria um novo objeto com o título e o texto
  // e popula o array de notas desta classe
  criarNota(titulo, texto){
    const novaNota = {titulo, texto}
    this.notas.push(novaNota)
  }

  // tudo que estiver dentro do render() será
  // retornado para a tela.
  // o react foi pensado para ser componentizado,
  // fazendo vários arquivos pequenos ao invés de
  // arquivos grandes com muitos elementos.

  // Ao definir um componente, podemos passar propriedades
  // que quisermos para o mesmo.
  // Isso é uma injeção de dependência

  // No primeiro elemento, passamos o método criarNota que será 
  // chamado pelo formulário. No segundo, passamos a propriedade,
  // que será uma array populada na função criarNota

  // Importante entender que, para a propriedade criarNota fazer a 
  // interação com o componente filho e trazer de volta um valor
  // que será usado neste componente, é preciso usar o bind(this)
  render () { 
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.notas} />
      </section>
    )
  };
}