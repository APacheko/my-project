
export default function Tooltip({ isTooltipOpen, closePopup, handleOverlayClose }) {
   
  return (
    
    <article
      className={`popup  ${isTooltipOpen ? "popup_opened" : ""}`}
      onClick={handleOverlayClose}
    >
      <div className="popup__container-tooltip" noValidate>
        <h2 className="popup__title-tooltip">
          Спасибо!
        </h2>
        <p className="popup__text-tooltip">Мы получили заявку и скоро свяжемся с вами</p>
        <button
          className="popup__close-btn"
          type="button"
          aria-label="закрыть"
          onClick={closePopup}
        ></button>
      </div>
    </article>
   
  );
}
