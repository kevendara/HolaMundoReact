import react, {Component} from 'react'
import logo from '../logo.svg'

export default class Cabecera extends Component{
    manejaClick=()=>{
        const{manejaClick,miau}=this.props
        manejaClick(miau)
    }
    render(){
        const {miau, manejaClick} = this.props
        return(
            <header className="App-header">
                <p>
                    <img onClick={this.manejaClick} src={logo} className="App-logo" alt="logo"/>
                    <br/>
                    Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        {miau}
                    </a>
            </header>
        )
    }
}