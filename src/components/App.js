import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  return (
    <div class="page">
      <Header />
      <Main />
      <Footer />
      <PopupWithForm />
      <ImagePopup />

      <div class="popup popup_type_avatar">
        <div class="popup__container">
          <form
            class="form form_type_avatar"
            name="formElementAvatar"
            novalidate
          >
            <h2 class="form__title">Обновить аватар</h2>
            <input
              class="form__input form__input_type_avatar"
              type="url"
              name="avatar"
              id="avatar"
              placeholder="Ссылка на картинку"
              required
            />
            <span class="form__error avatar-error"></span>
            <button class="form__button" type="submit">
              Сохранить
            </button>
          </form>
          <button
            class="popup__button popup__button_type_close"
            type="button"
            aria-label="Закрыть"
          ></button>
        </div>
      </div>

      <div class="popup popup_type_edit">
        <div class="popup__container">
          <form class="form form_type_edit" name="formElementEdit" novalidate>
            <h2 class="form__title">Редактировать профиль</h2>
            <input
              class="form__input form__input_type_name"
              type="text"
              name="name"
              id="name"
              placeholder="Имя"
              required
              minlength="2"
              maxlength="40"
            />
            <span class="form__error name-error"></span>
            <input
              class="form__input form__input_type_about"
              type="text"
              name="about"
              id="about"
              placeholder="О себе"
              required
              minlength="2"
              maxlength="200"
            />
            <span class="form__error about-error"></span>
            <button class="form__button" type="submit">
              Сохранить
            </button>
          </form>
          <button
            class="popup__button popup__button_type_close"
            type="button"
          ></button>
        </div>
      </div>

      <div class="popup popup_type_add">
        <div class="popup__container">
          <form class="form form_type_add" name="formElementAdd" novalidate>
            <h2 class="form__title">Новое место</h2>
            <input
              class="form__input form__input_type_title"
              type="text"
              name="title"
              id="title"
              placeholder="Название"
              required
              minlength="2"
              maxlength="30"
            />
            <span class="form__error title-error"></span>
            <input
              class="form__input form__input_type_link"
              type="url"
              name="link"
              id="link"
              placeholder="Ссылка на картинку"
              required
            />
            <span class="form__error link-error"></span>
            <button class="form__button" type="submit">
              Создать
            </button>
          </form>
          <button
            class="popup__button popup__button_type_close"
            type="button"
            aria-label="Закрыть"
          ></button>
        </div>
      </div>

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

      <div class="popup popup_type_delete">
        <div class="popup__container">
          <form
            class="form form_type_delete"
            id="form_delete"
            name="formElementDelete"
            novalidate
          >
            <h2 class="form__title">Вы уверены?</h2>
            <button class="form__button" type="submit">
              Да
            </button>
          </form>
          <button
            class="popup__button popup__button_type_close"
            type="button"
          ></button>
        </div>
      </div>

      <template class="photo-template">
        <li class="photo__item">
          <button
            class="photo__trash"
            type="button"
            aria-label="Кнопка удаления"
          ></button>
          <img class="photo__card" src="#" alt="" />
          <div class="photo__info">
            <h2 class="photo__title"></h2>
            <div class="photo__like-container">
              <button
                class="photo__like"
                type="button"
                aria-label="Кнопка лайка"
              ></button>
              <span class="photo__like-counter">0</span>
            </div>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
