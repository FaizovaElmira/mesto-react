import React from 'react';

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name}`}>
      <div className="popup__container">
        <form className={`form form_type_${props.name}`} name={`formElement${props.name}`} noValidate>
          <h2 className="form__title">{props.title}</h2>
          {props.children}
          <button className="form__button" type="submit">Сохранить</button>
        </form>
        <button className="popup__button popup__button_type_close" type="button" aria-label="Закрыть"></button>
      </div>
    </div>
  );
}

export default PopupWithForm;

