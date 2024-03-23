import "./Promo.css";
import Image from "next/image";
import sticker from "../../../../public/sticker.svg";

export default function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">
          Решаем задачи некоммерческих организаций
        </h1>
        <Image className="promo__image" src={sticker} width={291} height={290} alt="картинка" />
      </div>
      <p className="promo__text">
        Помогаем с написанием заявки, чтобы получить грант, реализацией проектов
        и отчетностью
      </p>
    </section>
  );
}
