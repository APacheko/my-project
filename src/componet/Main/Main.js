"use client";
import Promo from "./Promo/Promo";
import Services from "./Services/Services";
import Projects from "./Projects/Projects";
import Team from "./Team/Team";
import Questions from "./Questions/Questions";

export default function Main({openPopup}) {
  return (
    <>
      <Promo />
      <Services openPopup={openPopup}/>
      <Projects />
      <Team />
      <Questions />
    </>
  );
}
