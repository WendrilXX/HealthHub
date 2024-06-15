import Header from "../../components/header/header";
import Card from "../../components/card/card";
import SobreNos from "../../components/sobre/sobre";
import Footer from "../../components/footer/footer";
import './home.css'
function Home(){
    return(
        <div className="div-body">
            <Header />
            <div className="imagem">
                <img src="../src/assets/autismo.png" alt="imagem-body" className="img-autismo"/>  
            </div>
            
            <Card className="card-rosa"/>
            <SobreNos />
            <Footer />
        </div>
    )
}
export default Home;