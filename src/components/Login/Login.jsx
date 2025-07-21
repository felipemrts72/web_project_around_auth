import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authorize } from '../../utils/auth';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const userData = await authorize({ email, password });
      console.log('Login bem-sucedido:', userData);
      navigate('/');
    } catch (error) {
      console.error(`ERROR [LOGIN]: ${error.message}`);
    }
  }
  return (
    <div className="login">
      <h3 className="login__title">Entrar</h3>
      <form
        className="popup__form form"
        id="login-form"
        noValidate
        onSubmit={handleSubmit}
      >
        <fieldset className="form__input-block">
          <input
            type="email"
            className="form__input form__input_theme_dark"
            required
            placeholder="E-mail"
            minLength="2"
            maxLength="40"
            onChange={handleEmailChange}
          />
        </fieldset>
        <fieldset className="form__input-block">
          <input
            type="password"
            className="form__input form__input_theme_dark"
            required
            placeholder="Senha"
            minLength="6"
            maxLength="14"
            autocomplete="off"
            onChange={handlePasswordChange}
          />
        </fieldset>
        <button
          type="submit"
          className="form__submit form__submit_theme_dark"
          id="login-submit"
        >
          Inscrever-se
        </button>
      </form>
      <div className="login__signin">
        <p className="login__text">Ainda não é um membro?</p>
        <Link to="/register" className="login__login-link">
          Inscreva-se aqui!
        </Link>
      </div>
    </div>
  );
}

export default Login;
