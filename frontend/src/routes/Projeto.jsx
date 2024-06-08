import '../sass/styleProjeto.scss'
import Equipe from '../assets/tanques.jpg'

const Projeto = () => {

    return(
        <>
        <div class="container">;
        <header>
            <h1>Projeto Netuno</h1>
        </header>
        <main>
            <div class="content">
                <img src={Equipe} alt="Imagem do Projeto Netuno"/>
                <section class="objective">
                    <h2>Nosso Objetivo</h2>
                    <p>
                    Uma das principais dores que nossa solução resolve é a poluição da água. A aquicultura tradicional frequentemente enfrenta problemas de efluentes e contaminação, que podem levar à degradação ambiental e à perda de estoques. Com a aquicultura tecnológica, utilizamos sistemas de recirculação que reduzem em até 90% a necessidade de água nova e minimizam a liberação de efluentes. Isso significa menos poluição e um ambiente mais saudável tanto para os organismos quanto para os ecossistemas circundantes.
                    </p>
                    <p>
                    A aquicultura tecnológica integra sistemas de recirculação de água, biofiltros e sensores avançados para monitorar e ajustar os parâmetros da água em tempo real. Esses sistemas garantem que os níveis de pH, temperatura, oxigênio dissolvido e salinidade estejam sempre dentro dos intervalos ideais para o crescimento saudável dos organismos aquáticos. Além disso, os dispensadores automáticos de alimento e os algoritmos de controle melhoram a eficiência alimentar, reduzindo o desperdício e garantindo que os organismos recebam a quantidade exata de nutrientes.
                    </p>
                    <p>
                    Nossa proposta de valor é clara: oferecer um sistema que não só melhora a produção e a eficiência, mas também protege o meio ambiente e promove a sustentabilidade. Com a aquicultura tecnológica, você pode esperar uma maior eficiência operacional, menores custos e um impacto ambiental reduzido. Isso se traduz em uma produção mais sustentável e em um retorno sobre o investimento mais rápido.
                    </p>
                </section>
            </div>
        </main>
    </div>
        </>
    )
}

export default Projeto