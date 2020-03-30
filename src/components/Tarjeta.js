import React from 'react';

const Tarjeta = props => {
    return (
        <div className="Card">
            <div className='imagen'>
                <img src={props.imagen}></img>
            </div>
            <div className="Descripcion">
                <p className="titulo">{props.nombre}</p>
                <p className="precio">{props.precio}</p>
            </div>
        </div>
    )
}

export default Tarjeta;
