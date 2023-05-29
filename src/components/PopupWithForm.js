function PopupWithForm({
  title,
  name,
  isOpen,
  onClose,
  children,
  buttonText,
  onSubmit,
}) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <form
          className={`form form_type_${name}`}
          name={`formElement${name}`}
          onSubmit={onSubmit}
          noValidate
        >
          <h2 className="form__title">{title}</h2>
          {children}
          <button className="form__button" type="submit">
            {buttonText || "Сохранить"}
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
