import PopupWithForm from './PopupWithForm'

function PopupWithConfirmation({isOpen, onClose, onConfirmation}) {
  function handleSubmit(event) {
    event.preventDefault();
    onConfirmation();
  }
  return (
    <PopupWithForm
      title="Вы уверены?"
      name="confirm"
      buttonText="Да"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  )
}

export default PopupWithConfirmation