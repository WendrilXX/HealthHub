import './card.css'
function Card(){
    return(
        <div className='card'>
           <img src="../src/assets/coracao.png" alt="coracao" className='coracao' />
           <div className='texto'>
               
                    <p className='titulo-abordagem'>Abordagem</p>
                    <p className='informacoes-abordagem'>Informações a mais</p>
                
                
           </div>
          
            <div className='retangulo'>
                <img src="../src/assets/seta.png" alt="seta" className='seta' />
            </div>
             
        </div>
    )
}
export default Card;