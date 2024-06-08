import {} from 'react';
import '../Sass/styleProduto.scss';
import Produto from '../assets/produto.png'
import { useNavigate } from 'react-router-dom';

function Produtos() {

  const navigate= useNavigate();

  const handleLogout =()=>{
    sessionStorage.removeItem("usuario");
    sessionStorage.removeItem("senha");
    alert("saindo do sistema...")
    navigate("/");
  }


  return (
    <>
      <section className="portifolio">

        <button onClick={handleLogout}>Logout</button>

        <h1>Nossos Produtos</h1>

        <div className="card">
                <img src={Produto}/>
                <h3>Nome do Produto</h3>
                <p>Descrição do produto a ser vendido</p>
                <button className='btn'>R$ 100,00</button>
            </div>      

            <div className="card">
                <img src={Produto}/>
                <h3>Nome do Produto</h3>
                <p>Descrição do produto a ser vendido</p>
                <button className='btn'>R$ 100,00</button>
            </div> 

            <div className="card">
                <img src={Produto}/>
                <h3>Nome do Produto</h3>
                <p>Descrição do produto a ser vendido</p>
                <button className='btn'>R$ 100,00</button>
            </div> 
      </section>
    </>
  );
}
export default Produtos;