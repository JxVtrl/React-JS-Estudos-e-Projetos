import React, {useState, useEffect} from 'react';


export default function Efeitos(){
    const [nome, setNome] = useState(undefined)

    useEffect(
        () => {
            if(nome === undefined){
                setNome(sessionStorage.getItem('nome') || '')
            }
            else{
                sessionStorage.setItem('nome', nome)
            }
        }, [nome]
    )

return (
    <>
        Nome: <input type="text" value={nome} onChange={(event) => setNome(event.target.value)}></input>
        <h2>Olá, {nome}</h2>
    </>
)
}