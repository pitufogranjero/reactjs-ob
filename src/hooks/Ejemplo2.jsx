import React, {useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    const miRef = useRef();

    function incrementar1(){
        setContador1(contador1 + 1)
    }

    function incrementar2(){
        setContador2(contador2 + 1)
    }
/**
 * CASO 1: CADA VEZ QUE HAYA UN CAMBIO EN EL ESTADO DEL COMPONENTE SE EJECUTA AQUELLO QUE ESTÁ DENTRO DEL USEEFFECT()
 */
/*
    useEffect(() => {
        console.log('cambio en el estado del componente');
        console.log('mostrando referencia a elemento del DOM');
        console.log(miRef);
    })
*/

/**
 * CASO 2: EJECUTAR SÓLO CUANDO SE CAMBIE EL CONTADOR 1
 * CADA VEZ QUE HAYA UN CAMBIO EN CONTADOR 1 SE EJECUTA LO QUE HAYA EN CONTADOR 1, EN CASO QUE CAMBIE CONTADOR 2 NO SE EJECUTARÁ
 */

    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
        console.log('Mostrando Referencia a elemento del DOM');
        console.log(miRef);
    }, [contador1])

    return (
        <div>
            <h1>*** Ejemplo de useState(), useRef() y useEffect() ***</h1>
            <h2>Contador 1: {contador1}</h2>
            <h2>Contador 2: {contador2}</h2>
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>
            <div>
                <button onClick={incrementar1}>Incrementa contador 1</button>
                <button onClick={incrementar2}>Incrementa contador 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;