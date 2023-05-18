function PopupWithForm({ title, name, isOpen, onClose, children, buttonText }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <form
          className={`form form_type_${name}`}
          name={`formElement${name}`}
          noValidate
        >
          <h2 className="form__title">{title}</h2>
          {children}
          <button className="form__button" type="submit">
            {buttonText}
          </button>
        </form>
        <button
          className="popup__button popup__button_type_close"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
