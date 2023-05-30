import React, { useEffect, useState } from "react";
import './Lista.css';
import api from "./api.js";

// Componente com a Lista dos Clientes Cadastrados

export default function Lista() {

    const [clientes, setClientes] = useState([]);

    
    // Consultando a lista de Clientes, utilizando a api criada
    
    useEffect(() => {
        api
        .get("/listar")
        .then((response) => {
            setClientes(response.data);
           
         })
        .catch((err) => {
           console.log("erro:" + err);
        });
    }, [clientes]);

    return (
            <div className="container">
                <div></div>
                <table className="table table-bordered">
                    <thead>
                        <tr className="table-secondary text-center">
                        <th>CNPJ</th>
                        <th>Nome da Empresa</th>
                        <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map(cliente => (
                             <tr key={cliente.id} className="text-center">
                                <td>{cliente.cnpj}</td>
                                <td>{cliente.empresa}</td>
                                <td><a href="#">editar</a></td>
                             </tr>
                            ))}
                    </tbody>
                </table>
            </div>
    );
}