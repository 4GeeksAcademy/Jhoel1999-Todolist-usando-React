import React, { useState } from "react";

//create your first component
const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const [tareas, setTareas] = useState([]);

    return (
        <div className="container mt-4">
            <h1 className="text-center">Lista de Tareas</h1>
            <div className="bg-light w-50 mx-auto rounded">
                <ul className="list-group">
                    <li className="list-group-item">
                        <input
                            type="text"
							className="w-100 border-0"
                            placeholder={tareas.length === 0 ? "No hay tareas, añadir tareas." : "¿Qué hay que hacer?"}
                            onChange={(e) => setInputValue(e.target.value)}
                            value={inputValue}
                            onKeyUp={(e) => {
                                if (e.key === "Enter" && inputValue.trim() !== "") {
                                    setTareas(tareas.concat([inputValue.trim()]));
                                    setInputValue("");
                                }
                            }}
                        />
                    </li>

                    {tareas.map((tarea, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center px-4">
                            <span>{tarea}</span>
                            <span className="p-0">
                                <i className="fa-solid fa-x d-none"
                                    onClick={() => {
                                        setTareas(tareas.filter((t, currentIndex) => index !== currentIndex));
                                    }}
                                ></i>
                            </span>
                        </li>
                    ))}
                </ul>
                <div className="text-danger p-2">{tareas.length} tareas pendientes</div>
            </div>
        </div>
    );
};

export default Home;
