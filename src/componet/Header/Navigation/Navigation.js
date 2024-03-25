import Link from "next/link";

export default function Navigation() {
  
  return (
   <nav className="navigation">
        <Link href='/#services' className="navigation__link navigation__link_1 link P1">Услуги</Link>
        <Link href='/#projects' className="navigation__link navigation__link_2 link P1">Проекты</Link>
        <Link href='/#team' className="navigation__link navigation__link_3 link P1">Команда</Link>
        <Link href='/#questions' className="navigation__link navigation__link_4 link P1">Вопросы</Link>
  </nav>
)}