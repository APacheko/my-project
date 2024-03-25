"use Client";
import Service from "./Service/Service";
import Title from "@/componet/Title/Title";
import { services } from "@/lib/constants";
export default function Services({ openPopup }) {
  return (
    <section className="services" name="services">
      <Title title="Услуги" />
      <ul className="services__list">
        {services.map((service) => (
          <Service openPopup={openPopup} service={service} key={service.id} />
        ))}
      </ul>
    </section>
  );
}
