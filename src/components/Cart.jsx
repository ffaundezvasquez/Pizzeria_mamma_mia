import React, { useState } from "react";
import { clp } from "../assets/utils/totalcarrito";
import { pizzaCart } from "../assets/utils/pizzas";

const Cart = () => {
  // Estado inicial basado en pizzaCart
  const [carrito, setCarrito] = useState(
    pizzaCart.map((pizza) => ({ ...pizza, count: 0 }))
  );

  // Calcular el total de productos y el total a pagar
  const totalProductos = carrito.reduce((acumulador, item) => acumulador + item.count, 0);
  const totalPagar = carrito.reduce((acumulador, item) => acumulador + item.price * item.count, 0);

  // Función para agregar pizzas al carrito
  const agregar = (pizza) => {
    setCarrito((prevCarrito) =>
      prevCarrito.map((item) =>
        item.id === pizza.id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  // Función para disminuir pizzas del carrito sin eliminar productos con count === 0
  const disminuir = (pizza) => {
    setCarrito((prevCarrito) =>
      prevCarrito.map((item) =>
        item.id === pizza.id && item.count > 0 ? { ...item, count: item.count - 1 } : item
      )
    );
  };

  // Obtener la cantidad de un producto específico en el carrito
  const obtenerCantidad = (id) => {
    const producto = carrito.find((item) => item.id === id);
    return producto ? producto.count : 0;
  };

  return (
    <div className="detail">
      <h2>Detalles de tu pedido</h2>
      <hr />
      <h3>Cantidad de Productos: {totalProductos}</h3>
      <div className="d-flex text-align-center justify-content-center">
        <h3>Total a pagar: ${clp(totalPagar)}</h3>
        <button className="btn btn-outline-success m-2">Pagar</button>
      </div>
      <hr />
      <div className="p3">
        {carrito.map((pizza) => (
          <div className="align-items-center" key={pizza.id}>
            <div className="titulo">
              <img src={pizza.img} alt={pizza.name} className="" />
            </div>
            <div className="descripcion">
              <p>
                <strong>{pizza.name}</strong>
              </p>
              <p>Precio: <strong>${clp(pizza.price)}</strong></p>
              <p>Cantidad: {obtenerCantidad(pizza.id)}</p>
            </div>
            <div className="botones">
              <button className="btn btn-success m-2" onClick={() => agregar(pizza)}>+</button>
              <button className="btn btn-danger m-2" onClick={() => disminuir(pizza)}>-</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
