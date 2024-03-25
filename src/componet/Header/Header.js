import Link from "next/link";
import Image from "next/image";
import Navigation from "./Navigation/Navigation";
import logo from "../../../public/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <Link className="header__logo" href="/">
        <Image className="header__image" src={logo} width={348} height={63} alt="Логотип" />
      </Link>
      <Navigation />
    </header>
  );
}
