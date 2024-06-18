function DetalhesProfissional({ profissional }) {
    return (
      <div className="detalhes-profissional">
        <h2>{profissional.nome}</h2>
        <p>{profissional.cargo} - {profissional.especialidade}</p>
        {/* Adicione mais detalhes conforme necessário */}
      </div>
    );
  }
  export default DetalhesProfissional;
  