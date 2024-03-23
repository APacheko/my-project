import Link from "next/link";
import Image from "next/image";
import logoFooter from "../../../public/logo_footer.svg";
import telegram from "../../../public/telegram.svg";
import vk from "../../../public/vk.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo-container">
          <Image
            className="footer__logo"
            src={logoFooter}
            width={225}
            height={63}
            alt="Логотип"
          />
          <p className="footer__text P2">Решения для НКО 2024</p>
        </div>
        <div className="footer__social">
          <h4 className="footer__title">Мы в соцсетях</h4>
          <Image
            className="footer__icon"
            src={telegram}
            width={60}
            height={60}
            alt="иконка телеграм"
          />
          <Image
            className="footer__icon"
            src={vk}
            width={60}
            height={60}
            alt="иконка вконтакте"
          />
          
        </div>
        <div className="footer__contacts">
          <h4 className="footer__title">Контакты</h4>
          <a className="footer__phone" href="tel: 88001234567">
            8 800 123-45-67
          </a>
          <a
            className="footer__mail P2"
            href="mailto:mail@htmlacademy.ru&body=привет?subject=вопрос"
          >
            hello@nko-solutions.ru
          </a>

          <div className="footer__links-container">
            <Link className="footer__link  link P2" href="/">
              Оферта
            </Link>
            <Link className="footer__link link P2" href="/">
              Политика конфиденциальности
            </Link>
          </div>
          <div />
        </div>
      </div>
    </footer>
  );
}
