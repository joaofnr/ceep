import React from 'react';
import ListaDeNotas from './components/ListaDeNotas';

export default function App() {
  return (
    <>
      <form>
        <input type="text" placeholder="Título" />
        <br />
        <textarea placeholder="Escreva sua nota" />
        <br />
        <button>Criar nota</button>
      </form>
      <ListaDeNotas />
    </>
  );
}