import { useEffect } from "react";
import HeaderImage from "@/assets/header.jpg";
import data from "./data";
import AOS from "aos";
import "aos/dist/aos.css";
import "./header.css";
import Image from "next/image";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <Image src={HeaderImage} alt="Header Portait" height={400} />
        </div>
        <h3 data-aos="fade-up">Amine Bouguettaya</h3>
        <p>
          Aspirant ingénieur logiciel et développeur web Full Stack, je suis
          passionné par la création de solutions innovantes. Mon intuition
          naturelle et ma facilité d&apos;apprentissage me permettent
          d&apos;aborder les défis du développement web avec enthousiasme. Mes
          compétences englobent des langages tels que Java, JavaScript et C#,
          ainsi que d&apos;autres technologies prêtes à servir des projets
          captivants. Explorez mon portfolio pour découvrir mes réalisations et
          témoigner de mon engagement dans le monde professionnel. J&apos;ai
          hâte de contribuer à des projets passionnants au sein de votre équipe.
        </p>

        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className="btn primary">
            Discutons-en{" "}
          </a>
          <a href="#portfolio" className="btn light">
            Mon Travail
          </a>
        </div>
        <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
