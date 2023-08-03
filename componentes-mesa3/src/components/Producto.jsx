import React from "react";

const Producto = (props) =>{
    return (
        <article className="product">
            <h3>{props.nombre}</h3>
            <img src={props.imgUrl} alt="" srcset="" />
            <span> {props.precio} </span>
        </article>
    )
}

export default Producto;