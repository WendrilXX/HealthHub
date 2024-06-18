import React, { useState } from 'react';
import './MedicoP.css';

const doctors = [
  {
    id: 1,
    name: 'Dr. João Silva',
    specialty: 'Psiquiatra',
    description: 'Especialista em psiquiatria. Tratamento de transtornos mentais e emocionais.'
  },
  {
    id: 2,
    name: 'Dra. Maria Santos',
    specialty: 'Psicóloga',
    description: 'Psicóloga clínica. Acompanhamento psicológico para adultos e adolescentes.'
  },
  {
    id: 3,
    name: 'Dr. Pedro Almeida',
    specialty: 'Psiquiatra',
    description: 'Atendimento psiquiátrico para crianças e adultos. Tratamento de depressão, ansiedade, entre outros.'
  }
];

const ProfileDoctor = ({ onConsultaMarcada }) => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedConsultationType, setSelectedConsultationType] = useState(null);

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
    setSelectedConsultationType(null);
  };

  const handleConsultationTypeSelect = (type) => {
    setSelectedConsultationType(type);
  };

  const handleCancel = () => {
    setSelectedDoctor(null);
    setSelectedConsultationType(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const nome = formData.get('nome');
    const dataConsulta = formData.get('data');

    console.log('Nome:', nome);
    console.log('Data da Consulta:', dataConsulta);
    console.log('Médico Selecionado:', selectedDoctor.name);
    console.log('Tipo de Consulta:', selectedConsultationType);

    if (selectedConsultationType === 'domiciliar') {
      const endereco = formData.get('endereco');
      console.log('Endereço:', endereco);
    } else if (selectedConsultationType === 'online') {
      const plataforma = formData.get('plataforma');
      console.log('Plataforma selecionada:', plataforma);
    }

    const consulta = {
      medico: selectedDoctor.name,
      tipoConsulta: selectedConsultationType,
      data: dataConsulta,
      endereco: formData.get('endereco'),
      plataforma: formData.get('plataforma')
    };

    onConsultaMarcada(consulta);

    event.target.reset();
    handleCancel();
  };

  return (
    <div className="profile-doctor-container">
      <h1>Lista de Psicólogos e Psiquiatras</h1>
      {doctors.map(doctor => (
        <div key={doctor.id} className="doctor-card" onClick={() => handleDoctorClick(doctor)}>
          <h2>{doctor.name}</h2>
          <p><strong>Especialidade:</strong> {doctor.specialty}</p>
          <p>{doctor.description}</p>
          <hr />
        </div>
      ))}

      {selectedDoctor && (
        <div className="formulario-consulta">
          <h2>Formulário de Consulta para {selectedDoctor.name}</h2>
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="medico" value={selectedDoctor.name} />

            <label htmlFor="tipoConsulta">Tipo de Consulta:</label>
            <select id="tipoConsulta" name="tipoConsulta" onChange={(e) => handleConsultationTypeSelect(e.target.value)} required>
              <option value="">Selecione o tipo de consulta</option>
              <option value="clínica">Clínica</option>
              <option value="domiciliar">Domiciliar</option>
              <option value="online">Online</option>
            </select>

            {selectedConsultationType === 'domiciliar' && (
              <div>
                <label htmlFor="endereco">Endereço:</label>
                <input type="text" id="endereco" name="endereco" required placeholder="Digite o endereço" />
              </div>
            )}

            {selectedConsultationType === 'online' && (
              <div>
                <label htmlFor="plataforma">Plataforma de Chamada:</label>
                <select id="plataforma" name="plataforma" required>
                  <option value="">Selecione a plataforma</option>
                  <option value="zoom">Zoom</option>
                  <option value="whatsapp">WhatsApp</option>
                  <option value="meet">Meet</option>
                </select>
              </div>
            )}

            <label htmlFor="data">Data da Consulta:</label>
            <input type="date" id="data" name="data" required />

            <div>
              <button type="submit">Enviar</button>
              <button type="button" onClick={handleCancel}>Cancelar</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProfileDoctor;
