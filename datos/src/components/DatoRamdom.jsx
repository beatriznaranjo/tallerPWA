import React, {useState, useEffect} from "react"
import axios from 'axios'


export default function DatoRamdom() {

    const [ dato, setDato ] = useState("")

    async function  obtenerDato() {
        const respuesta = await axios.get("https://catfact.ninja/fact") 
            setDato(respuesta.data.fact)
    }


    useEffect(() => {
        obtenerDato()
    }, [])

    

    return (
        <div>
            <h3>Dato:</h3>
            <h4>{dato}</h4>
            <button onClick={obtenerDato}>Obtener dato</button>
        </div>
    )
}