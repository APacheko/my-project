import "@/app/page.global.css";
import "./project.css";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/constants";


export function generateStaticParams() {
  const data = projects;

  return data.map((item) => (
    {
    item: item.url,
  }
));
}

export function getProject(url) {
 
  return projects.find((item) => item.url === url);
}

export default async function Project({ params }) {
  const { url } = await params
 const data = getProject(url);



  return (
    <section className="project">
      <h1 className="project__title">{data.title}</h1>
      <Image className="project__image" src={data.image} alt="Логотип" />
      <div className="project__container">
        <h2 className="project__subtitle">{data.subtitle}</h2>
        <div className="project__container-caption">
          <p className="project__caption">Привлечено</p>
          <p className="project__summ">{data.summ} ₽</p>
        </div>
      </div>
      <ul className="project__list">
        {data.li.map((item, index) => (
          <li className="project__item" key={index}>
            {item}
          </li>
        ))}
      </ul>
      <Link className="project__link" href="/#projects">
        Назад
      </Link>
    </section>
  );
}
