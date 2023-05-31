import { useState, useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, buttonText }) {
  const avatarRef = useRef();
  const [errorAvatar, setErrorAvatar] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (isOpen) {
      avatarRef.current.value = "";
      setErrorAvatar("");
      setIsValid(false);
    }
  }, [isOpen]);

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  function handleChange() {
    setErrorAvatar(avatarRef.current.validationMessage);
    setIsValid(avatarRef.current.validity.valid);
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={buttonText}
      isDisabledSubmitButton={!isValid}
    >
      <input
        className={`form__input ${errorAvatar && "form__input_type_error"}`}
        type="url"
        name="avatar"
        id="avatar"
        placeholder="Ссылка на картинку"
        ref={avatarRef}
        onChange={handleChange}
        required
      />
      <span className={`form__error ${errorAvatar && "form__error_visible"}`}>
        {errorAvatar}
      </span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
