import React, { useEffect, useState } from "react";
import Cardpizza from "./Cardpizza";

const Home = () => {
    const [pizzas, setPizzas] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchPizzas = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/pizzas");
                if (!response.ok) {
                    throw new Error("Error al obtener las pizzas");
                }
                const data = await response.json(); 
                setPizzas(data); 
            } catch (err) {
                setError(err.message); 
            } finally {
                setLoading(false); 
            }
        };

        fetchPizzas(); 
    }, []);

    if (loading) {
        return <p>Cargando pizzas...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="container my-4">
            <div className="row">
                {pizzas.map((pizza) => (
                    <Cardpizza key={pizza.id} pizza={pizza} />
                ))}
            </div>
        </div>
    );
};

export default Home;



