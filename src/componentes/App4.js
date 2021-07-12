import React from 'react';

class App4 extends React.Component{
    constructor(props){
        super(props)
        this.state = {nome: undefined, txtNome: ""}
        }

    trocaTxtNome = (evento) => {
        this.setState({txtNome: evento.target.value})
    }

    trocaNome = ()=>{
        this.setState({nome: this.state.txtNome})

    }

  render(){
    //Não é uma boa prática este metodo
    /* 
        if(!this.state.nome){
            return(
            <>
                Nome: <input onChange={this.trocaTxtNome} placeholder="Digite aqui seu nome" type="text" value={this.state.nome}></input>
                
                <button onClick={this.trocaNome}>Enviar</button>
            </>)
        }
        return ( 
        <> 
        <p>Olá {this.state.nome}</p>
        </>
        )
    */

    // Boas práticas sempre!
    const renderForm = () =>{
        return(
            <>
                Nome: <input onChange={this.trocaTxtNome} placeholder="Digite aqui seu nome" type="text" value={this.state.nome}></input>
                
                <button onClick={this.trocaNome}>Enviar</button>
            </>
        )
    }

    const renderTxt = () =>{
        return ( 
            <> 
              <p>Olá {this.state.nome}</p>
            </>
        )
    }


    return !this.state.nome ? renderForm() : renderTxt()
  }
}





export default App4;