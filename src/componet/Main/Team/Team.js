import Title from "@/componet/Title/Title";
import { team } from "@/lib/constants";

export default function Team() {
  return (
    <section className="team" name="team">
      <Title title="Команда" />
      <ul className="team__list">
        {team.map((team) => (
          <li className="team__item" key={team.id}>
            <h3 className="team__title H2">«{team.title}»</h3>
            <p className="team__subtitle H2">{team.name}</p>
            <p className="team__text">{team.about}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
