import React, { Component } from 'react';
import Header from './Header';
class App extends Component {
  render() {
    return (
        <div className="contenedor">
        <Header 
          titulo = "Cotizador de Seguro de auto"
        />
        </div>
    );
  }
}

export default App;
