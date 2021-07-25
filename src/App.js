import react, {Component} from 'react'
import cabecera from './Components/Cabecera'
import './App.css'
import Cabecera from './Components/Cabecera'

class App extends Component {
  manejaClick = texto => {
    console.log(texto)
  }
  render(){
    const miau ='Bienvenido miau'
    return (
      <div className="App">
        <Cabecera miau={miau} manejaClick={this.manejaClick}/>
        HOLA MUNDO
      </div>
    );
  }
}

export default App;
