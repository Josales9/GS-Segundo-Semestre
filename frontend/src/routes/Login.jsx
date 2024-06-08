import { useRef } from 'react';
import '../sass/styleLogin.scss';

function Login() {
  const usuario = useRef();
  const senha = useRef();


  const getUsuario = sessionStorage.getItem('usuario');
  const getSenha = sessionStorage.getItem('senha');

  const handleSubmit = () => {
    if (usuario.current.value == 'Admin' && senha.current.value == '12345') {
      let token =
        Math.random().toString(16).substring(2) +
        Math.random().toString(16).substring(2);

      sessionStorage.setItem('usuario', 'Admin');
      sessionStorage.setItem('senha', token);
    } else {
      alert('Usuario e senha Inválidos !!!');
    }
  };

  return (
    <section className="login">

      {getUsuario && getSenha ? (
        <Portifolio/>
      ) : (
        <form onSubmit={handleSubmit} >
          <p>
            USUÁRIO:
            <input type="text" placeholder="Digite seu Usuário" ref={usuario} />
          </p>
          <p>
            SENHA:
            <input type="password" placeholder="Digite sua senha" ref={senha} />
          </p>
          <button type="submit">ENTRAR</button>
        </form>
      )}
    </section>
  );
}
export default Login;
