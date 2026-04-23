import Image from "next/image";
import Header from "./Componentes/Header/Header";
import Hero from "./Componentes/Hero/Hero";
import Interests from "./Componentes/Interests/Interests";
import Subjects from "./Componentes/Subjects/Subjects";
import CV from "./Componentes/CV/CV";
import Projects from "./Componentes/Projects/Projects";

export default function Home() {
  return (
    <> 
      <Header />
      <Hero />
      <Interests />
      <Subjects />
      <CV />
      <Projects />

    </>
  );
}