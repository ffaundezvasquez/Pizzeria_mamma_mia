import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPizzaSlice, faPlus, faCartShopping} from '@fortawesome/free-solid-svg-icons'

const Cardpizza = (props) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 my-3">
      <div className="card mx-2">
        <img src={props.img} className="card-img-top" alt={`Pizza ${props.nombre}`} />
        <div className="card-body">
          <h5 className="card-title fw-bold mb-3">Pizza {props.nombre}</h5>
          <hr />
          <p className="card-text h6 fw-light text-center">Ingredientes:</p>
          <p className="fw-light text-center"><FontAwesomeIcon icon={faPizzaSlice} /> {props.ingredientes.join(", ")}</p>
          <hr />
          <p className="card-text h6 fw-light text-center fw-bold">Precio: ${props.price}</p>
          <div className="d-flex justify-content-between px-3">
            <button className="btn btn-outline-secondary" type="button">Ver más <FontAwesomeIcon icon={faPlus} /></button>
            <button className="btn btn-outline-dark" type="button">Añadir <FontAwesomeIcon icon={faCartShopping} /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardpizza;

