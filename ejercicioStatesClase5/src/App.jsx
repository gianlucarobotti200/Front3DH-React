import { useState } from "react";
import Articulo from "./components/Articulo.jsx"

const App = () => {
    const [articulos, setArticulos] = useState([]);

    let agregarArticulo = (nombre) => {
        setArticulos((art) => [...art, nombre]);
    };

    return (
        <div>
            <input id="nombre" type="text" placeholder="Ingresar nombre artículo" />
            <button onClick={()=>agregarArticulo(document.getElementById('nombre').value)}>
                Agregar artículo
            </button>
            <section>
                {articulos.map((e, index) => (
                    <Articulo key={index} nombre={e} />
                ))}
            </section>
        </div>
    );
};

export default App;