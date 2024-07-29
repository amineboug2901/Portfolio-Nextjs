import React from "react";
import "@/sections/about/about.css";
import AboutImage from "@/assets/about.jpg";
import { FcDownload } from "react-icons/fc";
import Image from "next/image";
import Link from "next/link";
//import data from './data';

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <Image src={AboutImage} alt="About" height={600} />
          </div>
        </div>

        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {/*data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))*/}
          </div>
          <p>
            En tant que développeur logiciel junior, je suis ravi de commencer
            mon parcours dans le développement informatique. Même si je suis
            nouveau dans ce domaine, j&apos;ai une bonne compréhension des bases
            et je suis impatient d&apos;en apprendre davantage.
          </p>
          <p>
            Je suis vraiment intéressé par la technologie et je suis déterminé à
            continuer à apprendre et à grandir. De plus, j&apos;envisage
            d&apos;explorer des opportunités dans l&apos;analyse de données
            également.
          </p>

          <Link
            href="/CV-Amine-Bouguettaya.pdf"
            download
            target="_blank"
            className="btn primary"
          >
            Télécharger le CV <FcDownload />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
