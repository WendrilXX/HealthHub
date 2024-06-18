// card.jsx
import './card.css';

function Card({ tituloAbordagem, informacoesAbordagem }) {
    return (
        <div className='card'>
           <img src="../src/assets/coracao.png" alt="coracao" className='coracao' />
           <div className='texto'>
               <p className='titulo-abordagem'>{tituloAbordagem}</p>
               <p className='informacoes-abordagem'>{informacoesAbordagem}</p>
           </div>
           <div className='retangulo'>
               <img src="../src/assets/seta.png" alt="seta" className='seta' />
           </div>
        </div>
    );
}

// Exemplos de uso do componente Card
const cards = [
    { tituloAbordagem: "Tecnologia assistiva ", informacoesAbordagem: "Informações a mais sobre Abordagem 1" },
    { tituloAbordagem: "Abordagem 2", informacoesAbordagem: "Informações a mais sobre Abordagem 2" },
    { tituloAbordagem: "Abordagem 3", informacoesAbordagem: "Informações a mais sobre Abordagem 3" },
    { tituloAbordagem: "Abordagem 4", informacoesAbordagem: "Informações a mais sobre Abordagem 4" }
];

function App() {
    return (
        <div>
            {cards.map((card, index) => (
                <Card key={index} {...card} />
            ))}
        </div>
    );
}

export default App;