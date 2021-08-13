import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas';
import './assets/App.css'

export default class App extends Component {

  // o state é a forma como o react trabalha com atualização
  // dos componentes. Iniciamos com ele vazio
  constructor(){
    super()
    // forma mais "primitiva" de iniciar o estado de uma propriedade
    /* this.notas = []
    this.state = {} */ 
    // forma mais moderna de iniciar o estado de uma propriedade
    this.state = {
      notas:[]
    }
  }

  // função para criar a nota será
  // chamada internamente em algum componente
  // cria um novo objeto com o título e o texto
  // e popula o array de notas desta classe

  // ao criar a nota, chamamos um setter do state
  // que fazemos com que o react assuma um novo estado
  // atualizando as notas que foram criadas
  criarNota(titulo, texto){
    const novaNota = {titulo, texto}

    // forma mais "primitiva" passando o
    // array de notas para o state do componente
    /* this.notas.push(novaNota)
    this.setState({
      notas:this.notas
    }) */

    // forma mais moderna - atualizamos o state usando
    // spread operator que junta as notas já existentes
    // com a nova nota criada.
    // esta é a forma mais moderna usada em projetos
    const novoArray = [...this.state.notas, novaNota]
    this.setState({
      notas:novoArray
    })
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
        <ListaDeNotas notas={this.state.notas} />
      </section>
    )
  };
}