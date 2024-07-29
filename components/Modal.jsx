// Importation des modules nécessaires depuis React
import { Fragment } from "react";
import ReactDOM from "react-dom";

// Importation du composant Card
import Card from "./Card";

// Importation du hook personnalisé pour accéder au contexte modal
import { useModalContext } from "../context/modal-context";

// Importation du style CSS pour le composant Modal
import "./modal.css";

// Définition du composant Modal
const Modal = ({ className, children }) => {
  // Utilisation du hook personnalisé pour récupérer le contexte modal
  const { showModal, closeModalHandler } = useModalContext();

  return (
    <Fragment>
      {/* Rendu conditionnel du modal */}
      {showModal &&
        ReactDOM.createPortal(
          // Utilisation de React.createPortal pour rendre le contenu du modal dans un portail
          <>
            {/* Fond sombre derrière le modal, cliquable pour fermer le modal */}
            <section id="backdrop" onClick={closeModalHandler}></section>
            {/* Le contenu du modal, rendu dans le portail */}
            <Card className={className}>{children}</Card>
          </>,
          // Sélection de l'élément du DOM où le modal sera rendu (élément avec l'ID 'overlays')
          document.querySelector("#overlays")
        )}
    </Fragment>
  );
};

// Exportation du composant Modal
export default Modal;
