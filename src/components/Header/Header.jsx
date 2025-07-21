const isLogged = false;
const email = 'email@mail.com';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img
          alt="Logo do site, ao logo dos estados unidos"
          className="header__logo-item"
        />
        <div className="header__button-wrapper">
          <button className="header__button">
            {isLogged ? email : 'Entrar'}
          </button>
          <button
            className={
              isLogged
                ? 'header__button header__button_type_active'
                : 'header__button'
            }
          >
            {isLogged ? 'Sair' : ''}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
