import React from 'react';
import ReactDOM from 'react-dom';
import App from './componentes/App';
import App2 from './componentes/App2';
import App3 from './componentes/App3';
import App4 from './componentes/App4';
import {Lista, Item} from './componentes/Lista';


import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // Nome do arquivo em que se quer renderizar a tela dentro da tag React.StrictMode <nome do arquivo>
  <React.StrictMode>
    <Lista>
        <Item key="999" id="999" feito={false}>
          Teste Item
        </Item>
        <Item key="998" id="998" feito={true}>
          Teste Item 2
        </Item>
        Texto que não deve aparecer
    </Lista>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
