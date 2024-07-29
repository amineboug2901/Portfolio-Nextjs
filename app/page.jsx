"use client";
// Importation des composants nécessaires depuis leurs fichiers respectifs
import Header from "@/sections/header/Header";
import About from "@/sections/about/About";
import Services from "@/sections/services/Services";
import Portfolio from "@/sections/portfolio/Portfolio";
import Contact from "@/sections/contact/Contact";
import Footer from "@/sections/footer/Footer";
import FloatingNav from "@/sections/floating-nav/FloatingNav";
import Theme from "@/theme/Theme";

// Importation du hook personnalisé pour accéder au contexte de thème
import { useThemeContext } from "@/context/theme-context";

// Importation de hooks React pour gérer les références, les états et les effets
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Navbar from "@/sections/navbar/Navbar";

// Définition du composant principal de l'application
const App = () => {
  // Utilisation du hook personnalisé pour récupérer le contexte de thème
  const { themeState } = useThemeContext();

  // Utilisation de useRef pour obtenir une référence au composant principal
  const mainRef = useRef();

  // État pour contrôler l'affichage du composant FloatingNav
  const [showFloatingNav, setShowFloatingNav] = useState(true);

  // État pour stocker la position Y actuelle du site
  const [siteYPosition, setSiteYPosition] = useState(0);

  // Fonction pour afficher le composant FloatingNav
  const showFloatingNavHandler = () => {
    setShowFloatingNav(true);
  };

  // Fonction pour masquer le composant FloatingNav
  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false);
  };

  // Fonction pour déterminer si le composant FloatingNav doit être affiché ou masqué en fonction du défilement
  const floatingNavToggleHandler = () => {
    // Vérifie si nous avons fait défiler vers le haut ou vers le bas d'au moins 20px
    if (
      siteYPosition < mainRef?.current?.getBoundingClientRect().y - 20 ||
      siteYPosition > mainRef?.current?.getBoundingClientRect().y + 20
    ) {
      showFloatingNavHandler();
    } else {
      hideFloatingNavHandler();
    }

    // Met à jour la position Y du site
    setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
  };

  // Effet secondaire pour exécuter la fonction floatingNavToggleHandler à intervalles réguliers
  useEffect(() => {
    const checkYPosition = setInterval(floatingNavToggleHandler, 2000);

    // Fonction de nettoyage pour arrêter l'intervalle lorsque le composant est démonté
    return () => clearInterval(checkYPosition);
  }, [siteYPosition]); // Dépendance : siteYPosition

  const { isAuthenticated } = useSelector((state) => state.auth);
  const router = useRouter();
  if (!isAuthenticated) router.push("/login");

  // Rendu du composant principal de l'application
  return (
    <main
      className={`${themeState.primary} ${themeState.background}`}
      ref={mainRef}
    >
      {/* Rendu des différents composants de l'application */}
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      <Theme />

      {/* Rendu conditionnel du composant FloatingNav en fonction de l'état showFloatingNav */}
      {showFloatingNav && <FloatingNav />}
    </main>
  );
};

// Exportation du composant principal
export default App;
