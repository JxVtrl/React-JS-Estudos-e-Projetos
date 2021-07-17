import React, {useState} from 'react'

export default function UseState(){
    {/* 
    const [pessoa, setPessoa] = useState({nome: 'Joao', idade: 20})
    const onClick = () => {setPessoa({nome: 'Jorge'}); console.log(pessoa)}

    return (<h1 onClick={onClick}>{pessoa.nome}</h1>)

    */}

    const [nome, setNome] = useState('')

    return (
    <>
        Nome: <input type="text" value={nome} onChange={
            (event) => setNome(event.target.value)
        }></input>

        <h2>Olá, {nome}</h2>
    </>)
}