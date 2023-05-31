import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddCard, buttonText }) {
  const [title, setTitle] = useState("");
  const [errorTitle, setErrorTitle] = useState("");
  const [link, setLink] = useState("");
  const [errorLink, setErrorLink] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTitle("");
      setErrorTitle("");
      setLink("");
      setErrorLink("");
      setIsValid(false);
    }
  }, [isOpen]);

  function handleTitleChange(event) {
    setTitle(event.target.value);
    setIsValid(event.target.validity.valid);
    setErrorTitle(event.target.validationMessage);
  }

  function handleLinkChange(event) {
    setLink(event.target.value);
    setIsValid(event.target.validity.valid);
    setErrorLink(event.target.validationMessage);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAddCard({
      name: title,
      link: link,
    });
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="add"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={buttonText}
      isDisabledSubmitButton={!isValid}
    >
      <input
        className={`form__input ${errorTitle && "form__input_type_error"}`}
        type="text"
        name="title"
        id="title"
        placeholder="Название"
        required
        minLength="2"
        maxLength="30"
        value={title}
        onChange={handleTitleChange}
      />
      <span className={`form__error ${errorTitle && "form__error_visible"}`}>
        {errorTitle}
      </span>
      <input
        className="form__input form__input_type_link"
        type="url"
        name="link"
        id="link"
        placeholder="Ссылка на картинку"
        required
        value={link}
        onChange={handleLinkChange}
      />
      <span className={`form__error ${errorLink && "form__error_visible"}`}>
        {errorLink}
      </span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
