import successIcon from '../../images/success.svg'; // Ícone de sucesso
import errorIcon from '../../images/error.svg'; // Ícone de erro

function InfoTooltip({ isOpen, onClose, isSuccess, message }) {
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button type="button" className="popup__close" onClick={onClose} />
        <img
          src={isSuccess ? successIcon : errorIcon}
          alt={isSuccess ? 'Sucesso' : 'Erro'}
          className="popup__icon"
        />
        <h2 className="popup__message">{message}</h2>
      </div>
    </div>
  );
}

export default InfoTooltip;
