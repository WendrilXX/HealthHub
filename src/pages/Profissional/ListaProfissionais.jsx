import Profissional from './Profissional';

function ListaProfissionais({ profissionais }) {
  return (
    <div className="lista-profissionais">
      {profissionais.map(profissional => (
        <Profissional key={profissional.id} {...profissional} />
      ))}
    </div>
  );
}
export default ListaProfissionais;
