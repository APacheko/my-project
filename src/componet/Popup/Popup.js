"use client";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function Popup({ isOpenPopup, closePopup, setIsTooltipOpen, handleOverlayClose }) {

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'all',
  });

  const sendForm = async (data) => {
    await axios.post("https://orggrant.ru/api/sendEmail", {
        data
    });
    reset();
    closePopup();
    setIsTooltipOpen(true);
  };

  function handleInput (e) {
    const phoneInputs = document.querySelectorAll("input[data-tel-input]");
   
    const getInputNumbersValue = function (input) {
      return input.value.replace(/\D/g, "");
    };
  
    const onPhonePaste = function (e) {
      const input = e.target,
      inputNumbersValue = getInputNumbersValue(input);
      const pasted = e.clipboardData || window.clipboardData;
      if (pasted) {
        var pastedText = pasted.getData("Text");
        if (/\D/g.test(pastedText)) {
          input.value = inputNumbersValue;
          return;
        }
      }
    };
  
    const onPhoneInput = function (e) {
      
      let input = e.target,
        inputNumbersValue = getInputNumbersValue(input),
        selectionStart = input.selectionStart,
        formattedInputValue = "";
      if (!inputNumbersValue) {
        return (input.value = "");
      }
  
      if (input.value.length != selectionStart) {
        if (e.data && /\D/g.test(e.data)) {
          input.value = inputNumbersValue;
        }
        return;
      }
  
      if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
        
        if (inputNumbersValue[0] == "9")
          inputNumbersValue = "7" + inputNumbersValue;
        let firstSymbols = inputNumbersValue[0] == "8" ? "8" : "+7";
        formattedInputValue = input.value = firstSymbols + " ";
        if (inputNumbersValue.length > 1) {
          formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
        }
        if (inputNumbersValue.length >= 5) {
          formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
        }
        if (inputNumbersValue.length >= 8) {
          formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
        }
        if (inputNumbersValue.length >= 10) {
          formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
        }
      } else {
        formattedInputValue = "+" + inputNumbersValue.substring(0, 16);
      }
      input.value = formattedInputValue;
    };
    const onPhoneKeyDown = function (e) {
      let inputValue = e.target.value.replace(/\D/g, "");
      if (e.keyCode == 8 && inputValue.length == 1) {
        e.target.value = "";
      }
    };
    for (const phoneInput of phoneInputs) {
      phoneInput.addEventListener("keydown", onPhoneKeyDown);
      phoneInput.addEventListener("input", onPhoneInput, false);
      phoneInput.addEventListener("paste", onPhonePaste, false);
    }
  };

  

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
            <input autoComplete="on"
              className="popup__item P2"
              {...register("name", {
                required: "Поле обязательно к заполнению",
                minLength: {
                  value: 3,
                  message: "Минимумум 3 символа",
                },
                maxLength: {
                  value: 30,
                  message: "Максимум 30 символов",
                },
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
            <input autoComplete="on"
              className="popup__item popup__item_type_email P2"
              {...register("email", {
                required: "Поле обязательно к заполнению",
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                  message: "Введите Email в формате example@example.ru",
                },
              })}
              type="email"
              name="email"
              placeholder="Email"
            />
            <span className="popup__txt-error" id="name-error">
              {errors?.email && errors.email.message}
            </span>
          </label>
          <label className="popup__error " >
            <input autoComplete="on"
            {...register('phone', {
              onChange: (e) => {handleInput(e)},
               required: "Поле обязательно к заполнению", 
            })}
              data-tel-input
              className="popup__item popup__item_type_phone P2"
              type="tel"
              name="phone"
              placeholder="Телефон"
              
            />
            <span className="popup__txt-error">
              {errors?.phone && errors.phone.message}
            </span>
          </label>
          <label className="custom-checkbox popup__item popup__item_type_checkbox">
            <input type="checkbox" 
               {...register("checkbox", {
                required: "Поле обязательно к заполнению",
              })}/>
            <span className="popup__item_type_checkbox P2">
              Согласие на обработку персональных данных
            </span>
          </label>
        </fieldset>
        <button className="popup__submit-btn H2" type="submit" disabled={!isValid}>
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


