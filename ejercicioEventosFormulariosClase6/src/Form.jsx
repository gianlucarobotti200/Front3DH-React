import { useState } from "react";

const Form = () =>{

    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState(0);
    const [pokemon, setPokemon] = useState("");

    const handleNombre = (e) =>{

        setNombre(e.target.value);
    }

    const handleEdad = (e) =>{

        setEdad(e.target.value);
    }

    const handlePokemon = (e) =>{

        setPokemon(e.target.value);
    }

    const registro = (e) =>{
        e.preventDefault();
        alert("Datos enviados:" +
        "Nombre: " + nombre + 
        "Edad: " + edad +
        "Pokemon favorito: " + pokemon
        )
        console.log("Datos enviados:");
        console.log("Nombre: " + nombre);
        console.log("Edad: " + edad);
        console.log("Pokemon favorito: " + pokemon);
    }

    return (

        <div>
            <form onSubmit={registro}>
                <input type="text" placeholder="Ingresar nombre" onChange={handleNombre}/>
                <input type="number" placeholder="Ingresar edad" onChange={handleEdad}/>
                <input type="text" placeholder="Ingresar pokemon" onChange={handlePokemon}/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
export default Form;
