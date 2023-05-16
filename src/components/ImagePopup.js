import React from 'react';

function ImagePopup() {
  return (
    <div class="popup popup_type_view">
    <div class="popup__container popup__container_type_photo">
      <button
        class="popup__button popup__button_type_close"
        type="button"
        aria-label="Закрыть"
      ></button>
      <img class="popup__photo" src="#" alt="" />
      <h2 class="popup__caption">Название картинки</h2>
    </div>
  </div>
  );
}

export default ImagePopup;
