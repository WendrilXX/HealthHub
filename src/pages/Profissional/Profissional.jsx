import React from 'react';
import './Profissional.css';

const Profissional = () => {
  const profissionais = [
    { nome: 'Dr. João Silva', especialidade: 'Psiquiatra' },
    { nome: 'Sra. Maria Oliveira', especialidade: 'Psicóloga' },
    // Adicione mais profissionais conforme necessário
  ];

  return (
    <div className="profissional-container">
      <h1>Directório de Profissionais de Saúde Mental</h1>
      <ul>
        {profissionais.map((profissional, index) => (
          <li key={index}>
            <p><strong>{profissional.nome}</strong></p>
            <p>{profissional.especialidade}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profissional;