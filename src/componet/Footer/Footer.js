
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
           <div className="footer__links-container">
            <a className="footer__link  link P2" href="https://disk.yandex.ru/i/sHIujCZT9ZB_YQ" target="_blank" >
              Оферта
            </a>
            <Link className="footer__link link P2" href="https://disk.yandex.ru/i/0D4mDkys_eTL7A" target="_blank">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
        <div className="footer__contacts">
          <div className="footer__contact-container">
          <h4 className="footer__title">Контакты</h4>
          <Link href="https://vk.com/orggrant" target="_blank"><Image
            className="footer__icon"
            src={vk}
            width={60}
            height={60}
            alt="иконка телеграм"
          />
          </Link>
          </div>
        

          <a className="footer__phone" href="tel: +79773648320">
            +7 977 364-83-20
          </a>
          <a
            className="footer__mail P2"
            href="mailto:info@orggrant.ru&body=?subject="
          >
            info@orggrant.ru
          </a>
          <div />
          {/* <div className="footer__social">
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
        </div> */}
        </div>
      </div>
    </footer>
  );
}
