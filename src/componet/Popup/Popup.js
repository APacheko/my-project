import { useForm } from "react-hook-form";
import axios from "axios";
export default function Popup({ isOpenPopup, closePopup, setIsTooltipOpen, handleOverlayClose }) {

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
  });

  async function sendForm(data) {
    try {
      await axios.post("https://my-project-two-navy.vercel.app/api/send-request", data);
      reset();
      closePopup();
      setIsTooltipOpen(true);
    } catch (error) {
      console.log("sending error", error);
    }
  }

  return (
    <article
      className={`popup  ${isOpenPopup ? "popup_opened" : ""}`}
      onClick={handleOverlayClose}
    >
      <form
        className="popup__container"
        onSubmit={handleSubmit(sendForm)}
        noValidate
      >
        <h2 className="popup__title">
          Запись
          <br />
          на консультацию
        </h2>
        <fieldset className="popup__field">
          <label className="popup__error">
            <input
              className="popup__item P2"
              {...register("name", {
                required: "Поле обязательно к заполнению",
                minLength: {
                  value: 3,
                  message: "Минимумум 3 символа"
                },
                  maxLength: {
                    value: 30,
                    message: "Максимум 30 символов"
                  }
              })}
              type="text"
              name="name"
              placeholder="Имя и фамилия"
            />

            <span className="popup__txt-error" id="name-error">
              {errors?.name && errors.name.message}
            </span>
          </label>
          <label className="popup__error">
            <input
              className="popup__item popup__item_type_email P2"
              {...register("email", {
                required: "Поле обязательно к заполнению",
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                  message: "Введите Email в формате example@example.ru"

                }
              })}
              type="email"
              name="email"
              placeholder="Email"
            />
            <span className="popup__txt-error" id="name-error">
              {errors?.email && errors.email.message}
            </span>
          </label>
          <label className="popup__error">
            <input
              className="popup__item popup__item_type_phone P2"
              {...register("phone", {
                required: "Поле обязательно к заполнению",



              })}
              type="tel"
              name="phone"
              placeholder="Телефон"
            />
            <span className="popup__txt-error">
              {errors?.phone && errors.phone.message}
            </span>
          </label>
          <label className="custom-checkbox popup__item popup__item_type_checkbox">
            <input type="checkbox"/>
            <span className=".popup__item_type_checkbox P2">
              Согласие на обработку персональных данных
            </span>
          </label>
        </fieldset>
        <button className="popup__submit-btn H2" type="submit">
          Отправить
        </button>
        <button
          className="popup__close-btn"
          type="button"
          aria-label="закрыть"
          onClick={closePopup}
        ></button>
      </form>
    </article>
  );
}