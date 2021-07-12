import React from 'react';

class App2 extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return ( 
            /* No index.js
                <App2 title="Título exemplo" text="Conteúdo exemplo">
                Exemplo conteúdo
                </App2> 
            */
            <div className="box">
                {/* props.title vai pegar o conteudo dentro do props id title*/}
                <div id="title">{this.props.title}</div>
                
                {/* props.text vai pegar o conteudo dentro do props id text*/}
                <div id="text">{this.props.text}</div>

                {/* props.children vai pegar o conteúdo dentro da Div */}
                <div>{this.props.children}</div>
            </div>
        )
    }
}

export default App2;
