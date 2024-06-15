import React from "react";
import { Link } from "react-router-dom"; // Importe o Link do react-router-dom
import "./GrupoDEApoio.css";
import { Widget } from "../../components/Widget";

function Grupos() {
  const grupos = [
    {
      id: 1,
      nome: "Grupo 1",
      descricao: "Descrição do Grupo 1",
    },
    {
      id: 2,
      nome: "Grupo 2",
      descricao: "Descrição do Grupo 2",
    },
    {
      id: 3,
      nome: "Grupo 3",
      descricao: "Descrição do Grupo 3",
    },
    {
      id: 4,
      nome: "Grupo 4",
      descricao: "Descrição do Grupo 4",
    },
  ];

  return (
    <div className="GrupoDeApoio-container">
       {<Widget />}
      <h1>Grupos de Apoio</h1>
      <div className="grupos-list">
        {grupos.map((grupo) => (
          <div key={grupo.id} className="grupo">
            <h2>{grupo.nome}</h2>
            <p>{grupo.descricao}</p>
            {/* Usando o Link do react-router-dom para o botão */}
            <Link to="/forum">
              <button>Ir para o Grupo</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grupos;
