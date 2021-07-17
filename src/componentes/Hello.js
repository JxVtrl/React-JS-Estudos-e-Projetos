import React from 'react'

{/*
METODO 1 
export default function Hello({children}){
    return (
        <>
            {children}
        </>
    )
}

METODO 2 
export default function Hello({text}){
    return (
        <>
            {text}
        </>
    )
}
*/}

{/* METODO 3 */}
const Hello = ({text}) => <h1>{text}</h1>

export default Hello