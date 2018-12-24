import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../helpers/Helpers'; //Así se llama a una función que la exporta un .js
import Resumen from './Resumen';
import Resultado from './Resultado';
class App extends Component {

  // constructor(props){
  //   super(props);
  //   this.state = {

  //   }
  // }
  /*El state se hace en forma automática y también se puede realizar fuera del constructor*/
  state = {
    resultado: '',
    datos: {}
  }

  cotizarSeguro = (datos) =>{
    console.log(datos);
    const {marca,plan,anio} = datos; //se carga el modelo que recibimos por parámetro en constantes de App.js

    //Agregar que la base de cada seguro sea de 2000
    let resultado = 2000;

    //obtener la diferencia de años 
    const diferenciaAnio = obtenerDiferenciaAnio(anio);
    console.log('La diferencia es : ' + diferenciaAnio);
    
    //por cada año el seguro es 3%  más barato. Obtener la diferencia de años y por cada año restar el 3%
    resultado -=  ((diferenciaAnio * 3) * resultado) / 100;
    console.log(resultado);

    //Si eligen auto europeo se incrementa 30%, asiatico 5%, americado 15%
    resultado = calcularMarca(marca) * resultado;

    //el plan del auto, el básico implementa el valor 20%, y el completo 50%
    let incrementoPlan = obtenerPlan(plan);

    //dependiente del plan incrementar
    resultado = parseFloat(incrementoPlan * resultado).toFixed(); //para que sean solamente 2 dígitos

    //creamos el objeto para guardar los datos
    const datosAuto = {
      marca: marca,
      plan: plan,
      anio: anio
    }

    //Seteamos los estados de cada atributo
    this.setState({
      resultado : resultado,
       datos:datosAuto 
    });

    console.log(resultado);
  }

  render() {
    return (
        <div className="contenedor">
            <Header
            titulo = "Cotizador de Seguro de auto"/>
            <div className="contenedor-formulario">
            <Formulario cotizarSegurosProp={this.cotizarSeguro} />
            <Resumen 
            datos= {this.state.datos}
            />
            <Resultado resultado={this.state.resultado}/>
        </div>
        </div>
       
    );
  }
}

export default App;
