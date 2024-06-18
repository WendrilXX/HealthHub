import React from 'react';
import './Profissional.css';

const Profissional = () => {
  const profissionais = [
    { nome: 'Dr. João Silva', especialidade: 'Psiquiatra', email: 'joao.silva@example.com', telefone: '(11) 99999-9999' },
    { nome: 'Sra. Maria Oliveira', especialidade: 'Psicóloga', email: 'maria.oliveira@example.com', telefone: '(22) 88888-8888' },
    { nome: 'Aline Da Silva', especialidade: 'Assistente Social Psiquiátrico', email: 'aline.silva@example.com', telefone: '(33) 77777-7777' },
    { nome: 'Jorge Gabriel', especialidade: 'Enfermagem Psiquiátrica', email: 'jorge.alves@example.com', telefone: '(44) 66666-6666' },
    { nome: 'Romalia Oliveira', especialidade: 'Psicanálise', email: 'romalia.oliver@example.com', telefone: '(55) 55555-5555' },
    // Adicione mais profissionais conforme necessário
  ];

  return (
    <div className="profissional-container">
      <h1>Diretório de Profissionais de Saúde Mental</h1>
      <ul>
        {profissionais.map((profissional, index) => (
          <li key={index} className="profissional-item">
            <p><strong>{profissional.nome}</strong></p>
            <p>{profissional.especialidade}</p>
            <p>Email: {profissional.email}</p>
            <p>Telefone: {profissional.telefone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profissional;
