import React from 'react';
import ReactDOM from 'react-dom';
import App from './componentes/App';
import App2 from './componentes/App2';
import App3 from './componentes/App3';
import App4 from './componentes/App4';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // Nome do arquivo em que se quer renderizar a tela dentro da tag React.StrictMode <nome do arquivo>
  <React.StrictMode>
    <App4></App4>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
