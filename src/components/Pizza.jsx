import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice, faPlus, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Pizza = ({ pizzaId }) => {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${pizzaId}`);
        if (!response.ok) {
          throw new Error("Error al obtener la pizza");
        }
        const data = await response.json();
        setPizza(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPizza();
  }, [pizzaId]);

  if (loading) {
    return <p>Cargando información de la pizza...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container my-4">
      {pizza && (
        <div className="col-12 col-sm-6 col-md-4 my-3">
          <div className="card">
            <img
              src={pizza.img}
              className="card-img-top"
              alt={`Pizza ${pizza.name}`}
            />
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
              <hr />
              <p className="card-text h6 fw-light text-center fw-bold">
                Descripción: {pizza.desc}
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
      )}
    </div>
  );
};

export default Pizza;