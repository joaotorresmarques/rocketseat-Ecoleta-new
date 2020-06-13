import React, { useState } from 'react';
import './App.css';
import Headr from './Headr'
function App() {
  //ESTUDAR ESTADOS E IMPUTABILIDADE
  const [counter,setCounter] = useState(0);

  function Botao(){
    setCounter(counter + 1);
  }
  return (
    <div>
      <Headr title="Hello Joaozito" />
      <h1>Conteudo da aplicação</h1>
      <h4>{counter}</h4>
      <button type="button" onClick={Botao}>Aumenta ai</button>
    </div>
  );
}

export default App;
