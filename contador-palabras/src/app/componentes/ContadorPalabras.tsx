import React, { useEffect, useState } from "react";
import { text } from "stream/consumers";

export default function ContadorPalabras() {

    const [texto, setTexto] = useState<string>("");
    const [contador, setContador] = useState<number>(0);
    const [color, setColor] = useState<string>("yellow");

    useEffect(() => {
        let cantidadLetras = texto.length;

        if (cantidadLetras <= 10){
            setColor("yellow");
        }else if (cantidadLetras > 10 && cantidadLetras <= 50){
            setColor("green");
        } else if ( cantidadLetras > 50) {
            setColor("red");
        }

        setContador(cantidadLetras);

    }, [texto]);

    function asignarTexto(e:any) {
        let textoIngresar=e.target.value;

        if(textoIngresar.length > 100) return;

        setTexto(e.target.value);
    }


return (
    <div>
        <textarea name="" id="" rows={10} cols={10}
            placeholder="Escribe aquí tu texto"
            value={texto}
            onChange={asignarTexto}
            style={{color}}
            >
        </textarea>
        <br />
        cantidad de letras en el texto {contador}
        
    </div>

)
}