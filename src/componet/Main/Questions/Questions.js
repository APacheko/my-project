import Title from "@/componet/Title/Title";
import { questions } from "@/lib/constants";

export default function Questions() {
  return (
    <section className="questions" name="questions">
      <Title title="Ответы на вопросы" />
      <ul className="questions__list">
        {questions.map((question) => (
          <li className="questions__item" key={question.id}>
            <h3 className="questions__title H2">{question.title}</h3>
            <p className="questions__text P2">{question.about}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
