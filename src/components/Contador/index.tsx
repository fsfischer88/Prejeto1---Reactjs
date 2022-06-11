import { useEffect, useState } from "react";

export function Contador() {
    const [contador, setContador] = useState(0);
    const [valorContador, setValorContador] = useState(0);

    function incrementaContador() {
        setContador((prevValue) => prevValue + valorContador);
    }
    function decrementaContador() {
        setContador((prevValue) => prevValue - valorContador);
    }

    useEffect(() => {
        console.log(contador);
        console.log(valorContador);
    })

    return (
        <>
        {/* Quando o contador for negativo, a cor do h2 fique vermelha */}
        {/* Quando o contador for nulo, a cor fique preta */}
        {/* Quando o contador for positivo, a cor do h2 fique azul */}
            <h2>Contador: {contador}</h2>
            <button onClick={decrementaContador}>-</button>
            {/* Componente controlado */}
            <input placeholder="Digite um número" onChange={e => setValorContador(+e.target.value)} value={valorContador}/>
            <button onClick={incrementaContador}>+</button>
        </>
    );
}