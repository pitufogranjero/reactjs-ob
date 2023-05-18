import React, { useState } from 'react';

const Ejemplo1 = () => {

    // Valor inicial para un contador
    const valorInicial = 0;

    // Valor incial para una persona
    const personaInicial = {
        nombre: 'Javi',
        email: 'javiamat@me.com'
    }

    /*
    const [nombreVariable, funcionCambar] = useState(valorInicial)
    */

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial)

    // funcion para actualizar el estado privado
    function incrementarContador(){
        // ? funcionParaCambiar(nuevoValor)
        setContador(contador + 1);
    }
    // funcion para actualizar el estado privado
    function actualizarPersona(){
        // ? funcionParaCambiar(nuevoValor)
        setPersona(
            {
                nombre: 'Pepe',
                email: 'pepe@yahoo.es'
            }
        );
    }

    return (
        <div>
            <h1>*** Ejemplo de useState() ***</h1>
            <h2>Contador: {contador}</h2>
            <h2>Persona:</h2>
            <h3>{persona.nombre}</h3>
            <h4>{persona.email}</h4>
            <div>
                <button onClick={incrementarContador}>Incrementa valor</button>
                <button onClick={actualizarPersona}>Cambia persona</button>
            </div>
        </div>
    );
}

export default Ejemplo1;
