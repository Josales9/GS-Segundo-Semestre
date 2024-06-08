import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Prototipo from '../assets/aquitec1.webp'
import Foto from "../assets/algas.webp"
import '../sass/styleHome.scss'
import Logo from '../assets/logonetuno.webp'
import Monitoramento from '../assets/monitoramento.webp'

const Home = () => {
    return(
        <>
            <section className='leftsidecontainer' id='left'>
                <div id='leftside'>
                    <h1 className='fontleft'>Projeto Netuno</h1>
                    <img src={Logo} alt="" className='imagemprincipal'/>
                </div>
            </section>
        <section className="rightcontainer" id='right'>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Prototipo}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h5 className='titulocarosel'>Projetos de Aquicultura Tecnologica</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 fotoprojeto"
                    src ={Foto}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h5 className='titulocarosel'>Utilização de biofiltros</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Monitoramento}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h5 className='titulocarosel'>Monitoramento de despoluição</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </section>
            <section className='containerprincipal'>
        </section>
        </>
    )
}

export default Home