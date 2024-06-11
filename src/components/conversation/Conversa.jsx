import React from "react";
import './Conversa.css'

function Conversa() {
  // Array de dados das conversas
  const conversas = [
    {
      id: 1,
      perfil: "Nome de perfil 1",
      mensagem: "Mensagem 1",
    },
    {
      id: 2,
      perfil: "Nome de perfil 2",
      mensagem: "Mensagem 2",
    },
    {
      id: 3,
      perfil: "Nome de perfil 3",
      mensagem: "Mensagem 3",
    },
    {
      id: 4,
      perfil: "Nome de perfil 4",
      mensagem: "Mensagem 4",
    }
  ];

  return (
    <div className="conversas-container">
      {conversas.map((conversa) => (
        <div key={conversa.id} className="Box-conversa">
          <section className="perfil_photoName">
            <div className="photo"></div>
            <p className="nomeperfil">{conversa.perfil}</p>
          </section>
          <p>{conversa.mensagem}</p>

          <section className="botoes">
            <div className="responder">
              <p>Responder</p>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}

export default Conversa;
