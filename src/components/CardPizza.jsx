import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice, faPlus, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { pizzas } from "../assets/utils/pizzas";

const Cardpizza = () => {
  return (
    <div className="container">
      <div className="row">
        {pizzas.map((pizza) => (
          <div className="col-12 col-sm-6 col-md-4 my-3" key={pizza.id}>
            <div className="card">
              <img src={pizza.img} className="card-img-top" alt={`Pizza ${pizza.name}`} />
              <div className="card-body">
                <h5 className="card-title fw-bold mb-3">Pizza {pizza.name}</h5>
                <hr />
                <p className="card-text h6 fw-light text-center">Ingredientes:</p>
                <p className="fw-light text-center">
                  <FontAwesomeIcon icon={faPizzaSlice} /> {pizza.ingredients.join(", ")}
                </p>
                <hr />
                <p className="card-text h6 fw-light text-center fw-bold">
                  Precio: ${pizza.price.toLocaleString("es-CL")}
                </p>
                <div className="d-flex justify-content-between px-3">
                  <button className="btn btn-outline-secondary" type="button">
                    Ver más <FontAwesomeIcon icon={faPlus} />
                  </button>
                  <button className="btn btn-outline-dark" type="button">
                    Añadir <FontAwesomeIcon icon={faCartShopping} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cardpizza;