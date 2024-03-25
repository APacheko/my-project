"use client";
import { useState, useRef } from "react";
import { useClickOutside } from "../../../../hooks/useClickOutside";

export default function Servise({ service, openPopup }) {
  const [show, setShow] = useState(false);
  const menuRef = useRef(null);
  
  useClickOutside(menuRef, () => {
    if (show) setTimeout(() => setShow(false), 50);
  });

  return (
    <>
      <li className={`service noselect ${show ? "service-active" : ""}`} ref={menuRef}>
        {show && <div className="class"></div>}
        <div
          className={`service__container ${
            show ? "service__container-active" : ""
          }`}
          onClick={() => setShow(!show)}
        >
          <h3 className="service__title">{service.name}</h3>
          <p className="service__time">СРОК — {service.time}</p>
          <p className="service__description">{service.description}</p>

          {show && (
            <>
              <ul className="service__list" ref={menuRef}>
                <li className="service__text">{service.li_1}</li>
                <li className="service__text">{service.li_2}</li>
              </ul>
              <p className="service__price">
                {service.price}
                <span className="service__span">₽</span>
              </p>
              <button className="service__btn" onClick={openPopup}>Записаться</button>
            </>
          )}
        </div>
      </li>
    </>
  );
}
