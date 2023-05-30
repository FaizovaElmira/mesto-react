import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddCard }) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    setTitle("");
    setLink("");
  }, [isOpen]);

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleLinkChange(event) {
    setLink(event.target.value);
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
      buttonText="Создать"
    >
      <input
        className="form__input form__input_type_title"
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
      <span className="form__error title-error"></span>
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
      <span className="form__error link-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
