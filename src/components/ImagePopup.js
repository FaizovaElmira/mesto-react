import React from 'react';

function ImagePopup() {
  return (
    <div className="popup popup_type_view">
    <div className="popup__container popup__container_type_photo">
      <button
        className="popup__button popup__button_type_close"
        type="button"
        aria-label="Закрыть"
      ></button>
      <img className="popup__photo" src="#" alt="" />
      <h2 className="popup__caption">Название картинки</h2>
    </div>
  </div>
  );
}

export default ImagePopup;
