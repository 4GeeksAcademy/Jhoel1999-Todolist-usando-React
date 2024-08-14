import React, { useState } from "react";

//create your first component
const Home = () => {
    //1. Declarar el espacio del input (formulario)
    const [tarea, setTarea] = useState("");
    const [lista, setLista] = useState([]);

    return (
        <div className="container mt-4">
            <h1 className="text-center">Lista de Tareas</h1>
            <div className="bg-light w-50 mx-auto rounded">
                <ul className="list-group">
                    <li className="list-group-item">
                        <input
                            type="text"
							className="w-100 border-0"
                            placeholder={lista.length === 0 ? "No hay tareas, añadir tareas." : "¿Qué hay que hacer?"}
                            /*2. Asignar el evento onChange para vigilar los cambios*/
                            onChange={(e) =>{console.log(tarea); setTarea(e.target.value);}}
                            value={tarea}
                            /*3. Asignar el evento onkeyUp para agregar una tarea a la lista*/
                            onKeyUp={(e) => {
                                if (e.key === "Enter" && tarea !== "") {
                                    console.log("agregar");
                                    setLista(lista.concat([tarea]));
                                    setTarea("");
                                }
                            }}
                        />
                    </li>

                    {/*4. Mostrar la tarea en la lista*/}
                    {lista.map((tarea, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center px-4">
                            <span>{tarea}</span>
                            <span className="p-0">
                                <i className="fa-solid fa-x d-none"
                                    /*5. Eliminar la lista cada tarea*/
                                    onClick={() => {
                                        console.log("eliminado");
                                        setLista(lista.filter((t, currentIndex) => index !== currentIndex));
                                    }}
                                ></i>
                            </span>
                        </li>
                    ))}
                </ul>
                <div className="text-danger p-2">
                    {lista.length} tareas pendientes
                </div>
            </div>
        </div>
    );
};

export default Home;
