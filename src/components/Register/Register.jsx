function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleUpdateUser({ email, password });
  };
  return (
    <form
      className="popup__form form"
      id="register-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <fieldset className="form__input-block">
        <input
          type="text"
          className="form__input"
          id="register-input"
          required
          minLength="2"
          maxLength="40"
          onChange={handleEmailChange}
        />
      </fieldset>
      <fieldset className="form__input-block">
        <input
          type="text"
          className="form__input"
          id="register-input"
          required
          minLength="2"
          maxLength="200"
          onChange={handlePasswordChange}
        />
      </fieldset>
      <button type="submit" className="form__submit" id="register-submit">
        Salvar
      </button>
    </form>
  );
}

export default Register;
