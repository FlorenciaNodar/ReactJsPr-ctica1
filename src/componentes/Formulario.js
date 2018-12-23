import React , {Component} from 'react';

class Formulario extends Component {

    //refs son para leer los valores de los campos de un formulario
    marcaRef = React.createRef();
    anioRef = React.createRef();
    planBasicoRef = React.createRef();
    planCompletoRef = React.createRef();

    //También se pueden crear de otra manera las propiedades:
    // Por el momento voy a dejarlas como estában anteriormente
    // constructor(props){
    //     super(props);
    //     this.marcaRef = React.createRef();
    //     this.anioRef = React.createRef();
    //     this.planBasicoRef = React.createRef();
    //     this.planCompletoRef = React.createRef();
    // }

    cotizarSeguro= (e) => { //Se implementa de ésta manera el método para no tener que escribir .bind(this) en los formularios
        e.preventDefault(); // se usa para que no muestre en la url los campos del formulario            
    //obtener los datos, crear el objeto y enviarlo al componente principal.
    //hay que crear un refs por cada campo

    console.log(this.marcaRef.current.value/*Se utiliza al current.value para acceder directamente al valor*/);
    }

render(){
    return(
        <form className="cotizar-auto" onSubmit={this.cotizarSeguro/*.bind(this)/*definimos .bind(this) para que se sepa que los atributos son de ésta clase y así poder llamarlos con this.*/} >
        <div className="campo">
            <label>Marca</label>
            <select name="marca" ref={this.marcaRef} >
                <option value="americano">Americano</option>
                <option value="europeo">Europeo</option>
                <option value="asiatico">Asiatico</option>
            </select>
        </div>

        <div className="campo">
            <label>Año</label>
            <select name="year" ref={this.anioRef}>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
            </select>
        </div>
        <div className="campo"  >
            <label>Plan:</label>
            <input type="radio" name="plan" value="basico" ref={this.planBasicoRef}/> Básico
            <input type="radio" name="plan" value="completo" ref={this.planCompletoRef}/> Completo
        </div>

        <button type="submit" className="boton">Cotizar</button>
    </form>
    )
    }
}

export default Formulario;