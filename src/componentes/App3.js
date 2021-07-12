import React from 'react';

class App3 extends React.Component{
    constructor(props){
        super(props)
        this.state = {nome: '', idade: ''}
        this.trocaNome = this.trocaNome.bind(this)
        // 2 - a declaracao de cima diz que a funcao trocaNome vai subescrever o componente com bind(vincular)
        }

    trocaNome = function(chgName){
        this.setState({nome: chgName.target.value})
        //3- a declaracao acima vai setar o novo estado do nome que tera como target o valor    
    }

    trocaIdade = (chgAge) => {
        this.setState({idade: chgAge.target.value})
        // Funcoes do tipo arrow não precisam do atributo descrito como 2, linha 7
    }

  render(){
    return ( 
    <> 
        Nome: <input onChange={this.trocaNome} placeholder="Digite aqui seu nome" type="text" value={this.state.nome}></input>
        {/* na tag input o comando onChange dirá que algo está para ser mudado, no caso pela funcao trocaNome */}
        <br/>
        Idade: <input onChange={this.trocaIdade} placeholder="Digite aqui sua idade" type="text" value={this.state.idade}></input>
      <p>Olá {this.state.nome}, {this.state.idade}</p>
    </>
    )
  }
}

export default App3;
