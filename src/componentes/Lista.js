import { logRoles } from '@testing-library/react';
import React from 'react';

class Lista extends React.Component{
    constructor(props){
        super(props)
        /* TEORIA
        this.state = {items:["item1","item2","item3","item4","item5"]}
        */
        this.state = [
            {id: 1, nome: 'item1', feito: false},
            {id: 2, nome: 'item2', feito: true},
            {id: 3, nome: 'item3', feito: true},
            {id: 4, nome: 'item4', feito: false}
        ]
    }
    render(){
        return(
            <>
                <ul>
                    {this.state.map(item => (
                        <Item id={item.id} feito={item.feito}>
                        {item.nome}
                        </Item>
                    ))}
                    {/* com essa funcao abaixo qualquer texto que estiver no index entre tag pode aparecer */} 
                    {/* {this.props.children} */}

                    {/* No exemplo, fizemos a verificação se o filho é uma instância da classe Item, se for retornamos ele, se não for retornamos null. */}
                    {React.Children.map(this.props.children, child => child.type == Item ? child : null)}
                </ul>
            </>
        ) 
        /* TEORIA
        <>
            <ul>
                {this.state.items.map((item, indice) => <li key={indice}>{item}</li>)}
            </ul>
        </>
        */ 
    }
}

class Item extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const textDecoration = this.props.feito ? 'line-through' : 'none'
        return(
            <>
                <li data-id={this.props.id} style={{ textDecoration }}>
                    {this.props.children}
                </li>
            </>
        )
    }
}

//export default Lista;
export {Lista, Item};