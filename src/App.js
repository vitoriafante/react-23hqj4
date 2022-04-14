import React from 'react';
import './style.css';
import Carro from './Carro';

function Welcome(props) {
  return <h1>hello, {props.name}! </h1>;
}

function App() {
  return (
    <div>
      <Carro modelo="Volkswagen" nome="Arteon" potencia="2.0" aro="17"/>
      <Welcome name= "vitória" />
    </div>
  );
}

export default App;
