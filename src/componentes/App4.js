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
        sessionStorage.setItem('nome', this.state.txtNome)

    }

    // Esta funcao abaixo esta predefinida para rodar depois que os componentes sao criados, antes da aplicacao realmente mostrar algo na tela
    componentDidMount = () => {
        const nome = sessionStorage.getItem('nome')
        if(nome){
            this.setState({nome})
        }
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