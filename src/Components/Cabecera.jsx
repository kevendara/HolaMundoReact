import react, {Component} from 'react'
import logo from '../logo.svg'

export default class Cabecera extends Component{
    render(){
        return(
            <header className="App-header">
                <p>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <br/>
                    Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
            </header>
        )
    }
}