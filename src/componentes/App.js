import React from 'react';

function primeiroApp() {
  return (
    <div className="App">
      <p>Hello World!</p>
    </div>
  );
}


class App extends React.Component{
  render(){
    return ( //Tudo desse return deve estar envolvido em uma div, senão não funciona
    // ou div ou tag vazia <> e </>
    <> 
      <p>Meu primeiro parágrafo em React.</p>
      <p>Meu Segundo parágrafo</p>
      <div>
        <pre>Cansei de parágrafos...</pre>
      </div>
      <p>{new Date().toLocaleDateString("pt-br")}</p>
    </>
    )
  }
}

export default App;
