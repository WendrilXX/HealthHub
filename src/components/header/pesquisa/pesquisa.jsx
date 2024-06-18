import './pesquisa.css';
function CampoPesquisa(){
    return(
        <>
        <div>
            <h1 className='titulo'>HealthHub</h1>
        </div>
            <div className="campo-pesquisa">
            <input type="text" className="input-pesquisa" placeholder='TAA' />
            <input type="submit" className="botao-pesquisa" value='pesquisa' />
            </div>
        </>
       
    )
}
export default CampoPesquisa;