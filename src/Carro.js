import React from 'react';
import Motor from './Motor';
import Roda from './Roda';
export default class Carro extends React.Component {
  render() {
    return (
      <div>
        <h2 style={{ color: '#00688B', fontSize: 50 }}>
          Meu Carro {this.props.modelo}
        </h2>

        <h2>
          <Motor potencia={this.props.potencia} />
          <Roda aro={this.props.aro} />
        </h2>
        <img
          style={{ width: 550 }}
          src="https://www.autoo.com.br/fotos/2020/6/1280_960/arteon8_24062020_31165_1280_960.jpg"
        />
        <h2>Nome: {this.props.nome}</h2>
      </div>
    );
  }
}
