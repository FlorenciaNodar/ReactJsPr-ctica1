import React, {Component} from 'react';
import {primeraMayuscula} from '../helpers/Helpers';
class Resumen extends Component {

    mostrarResumen = () =>{
        const {marca,anio,plan} = this.props.datos;
        if(!marca || !anio || !plan) return null;
        return(            
        <div className="resumen">
        <h2>Resumen de Cotización</h2>
        <li>Marca: {primeraMayuscula(marca)}</li>
        <li>Plan: {primeraMayuscula(plan)}</li>
        <li>Año del auto: {anio}</li>
        </div>
        );
    }
    render(){
        return(
         <div>
            {this.mostrarResumen()}
        </div>
        );
    }
}

export default Resumen;