"use client";
// Importation des modules nécessaires depuis React
import { createContext, useContext, useState } from "react";

// Création d'un contexte modal avec createContext()
const ModalContext = createContext();

// Création d'un composant ModalProvider pour envelopper l'application avec le contexte modal
export const ModalProvider = ({ children }) => {
  // Utilisation de l'état local pour gérer l'état du modal
  const [showModal, setShowModal] = useState(false);

  // Fonction pour afficher le modal
  const showModalHandler = () => {
    setShowModal(true);
  };

  // Fonction pour fermer le modal
  const closeModalHandler = () => {
    setShowModal(false);
  };

  // Rendu du composant ModalContext.Provider pour fournir le contexte modal aux composants enfants
  return (
    <ModalContext.Provider
      value={{ showModal, showModalHandler, closeModalHandler }}
    >
      {children}
    </ModalContext.Provider>
  );
};

// Hook personnalisé pour consommer le contexte modal n'importe où dans l'application
export const useModalContext = () => {
  return useContext(ModalContext);
};
