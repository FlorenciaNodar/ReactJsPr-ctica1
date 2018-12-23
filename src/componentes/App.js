import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
class App extends Component {

  cotizarSeguro = (datos) =>{
     console.log(datos);
    const {marca,plan,anio} = datos;

    //Agregar que la base de cada seguro sea de 2000
    let resultado = 2000;

    //por cada año el seguro es 3%  más barato. Obtener la diferencia de años y por cada año restar el 3%

    //Si eligen auto europeo se incrementa 30%, asiatico 5%, americado 15%
  }

  render() {
    return (
        <div className="contenedor">
            <Header
              titulo = "Cotizador de Seguro de auto"/>
        <div className="contenedor-formulario">
            <Formulario cotizarSegurosProp={this.cotizarSeguro} />
        </div>
        </div>
       
    );
  }
}

export default App;
