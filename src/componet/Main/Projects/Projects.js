import Title from "@/componet/Title/Title";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/constants";

export default function Project() {
  return (
    <section className="projects" name="projects">
      <Title title="Проекты" />
      <ul className="projects__list">
        {projects.map((project) => (
          <li className="projects__item" key={project.id}>
            <Image
              className="projects__image"
              src={project.image_preview}
              width={345}
              height={216}
              alt="фотография проекта"
            />
            <p className="projects__caption">Привлечено</p>
            <p className="projects__price">{project.summ} ₽</p>
            <h3 className="projects__text P2">{project.title_preview}</h3>
            <Link href={`project/${project.id}`} className=" link projects__link">
              Подробнее
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
