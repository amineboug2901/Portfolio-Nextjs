import {  SiJavascript, SiPython, SiVisualstudio } from 'react-icons/si';
import { RiReactjsLine } from 'react-icons/ri';
import { FaApple, FaAws, FaDatabase, FaGitSquare, FaJava, FaVuejs } from 'react-icons/fa';
import { AiFillAppstore } from 'react-icons/ai';
import { IoLogoAndroid, IoLogoJavascript } from "react-icons/io";
import { LiaLaptopCodeSolid } from "react-icons/lia";

const data = [
  {
    id: 1,
    icon: <SiJavascript />,
    title: 'JavaScript Development',
    desc: "Expert en JavaScript avec une expérience des frameworks et bibliothèques tels que React, Next.js, Nuxt.js et Node.js. Compétent dans l'utilisation de JWT et Context API pour la gestion de l'état et l'authentification, assurant des applications web interactives et sécurisées..",
  },
  {
    id: 2,
    icon: <FaJava />,
    title: 'Java Development',
    desc: "Compétent en programmation Java, avec une concentration sur les principes de la Programmation Orientée Objet (POO). Expérimenté dans l'intégration des bases de données SQL pour améliorer les performances et la scalabilité des applications.",
  },
  {
    id: 3,
    icon: <SiPython />,
    title: 'Python Analytics & Web Scraping',
    desc: "Compétent en Python, utilisant des bibliothèques comme Pandas et NumPy pour l'analyse et la manipulation des données. Expérimenté dans la création de visualisations informatives avec PowerBI pour orienter les décisions commerciales. Également compétent en web scraping avec des bibliothèques telles que BeautifulSoup et Scrapy pour collecter et analyser efficacement des données..",
  },
  {
    id: 4,
    icon: <FaDatabase />,
    title: 'Database Management',
    desc: "Solide expérience dans la gestion de bases de données utilisant MySQL, MongoDB et SQL. Capable de concevoir des architectures de bases de données robustes et d'exécuter des requêtes complexes pour supporter des applications à grande échelle..",
  },
  
  {
    id: 5,
    icon: [<FaVuejs />, <FaAws />],
    title: 'Vue.js & Node.js E-Commerce Project',
    desc: "Développé un site e-commerce de style Amazon axé sur un design convivial sur Udemy. Implémenté un système complet de shopping en ligne comprenant la gestion du panier et des fonctionnalités de paiement sécurisé. Déployé avec succès sur AWS en utilisant S3 pour des capacités robustes de stockage d'images..",
  },
  {
    id: 6,
    icon: <RiReactjsLine />,
    title: 'Frontend Engineering',
    desc: "Compétences avancées en développement frontend avec React. Capable de créer des interfaces réactives et esthétiquement attrayantes offrant une excellente expérience utilisateur sur tous les appareils..",
  },
  {
    id: 7,
    icon: <FaGitSquare />,
    title: 'Version Control',
    desc: "Compétent dans l'utilisation de Git pour le contrôle de version, assurant un flux de travail fluide au sein des équipes de développement et un stockage sécurisé de toutes les versions du code du projet..",
  },
  {
    id: 8,
    icon: <SiVisualstudio />,
    title: 'Software Development',
    desc: "Compétent dans l'utilisation de l'IDE Visual Studio pour développer, tester et déployer des applications logicielles. Familier avec les outils de débogage et les environnements de développement intégrés pour améliorer l'efficacité du codage..",
  },
  {
    id: 9,
    icon: [<IoLogoJavascript />, <AiFillAppstore />],
    title: 'Scrum and Agile Methodologies',
    desc: "Familiarisé avec les méthodologies Scrum et Agile, permettant une collaboration efficace au sein des équipes et une adaptabilité aux exigences changeantes des projets..",

  },
  {
    id: 10,
    icon: <LiaLaptopCodeSolid />,
    title: 'C# Desktop Application Development',
    desc: "Créé une application de bureau en utilisant C# et Visual Studio Community pour une gestion efficace des collèges. Développé une fonctionnalité de recherche pour explorer et récupérer les détails de tous les programmes disponibles offerts par le collège. Mis en œuvre des fonctionnalités pour accéder et gérer les listes d'étudiants, fournissant une plateforme centralisée pour une administration rationalisée.",
  },
  {
    id: 11,
    icon: <FaApple />,
    title: 'iOS App Development',
    desc: "Compétent en développement d'applications iOS en utilisant Swift et Xcode. Expérimenté dans la création d'applications attrayantes et conviviales pour la plateforme iOS, en respectant les lignes directrices de conception et les meilleures pratiques d'Apple."
  },
  {
    id: 12,
    icon: <IoLogoAndroid />,
    title: 'Android App Development',
    desc: "Compétent en développement d'applications Android en utilisant Java et Android Studio. Capable de créer des applications dynamiques et intuitives pour les appareils Android, en assurant la compatibilité avec diverses tailles d'écran et versions."
  },
]


export default data;
