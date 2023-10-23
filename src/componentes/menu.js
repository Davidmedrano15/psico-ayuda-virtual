import React, { useState } from "react";
import andrea from "../images/andrea.jpg";
import Modal from "react-modal";
import "../css/menu.css";

Modal.setAppElement("#root");

function Menu() {
 
  const [isAboutModalOpen, setAboutModalOpen] = useState(false);

  const openAboutModal = (e) => {
    e.preventDefault(); // Evita la acción predeterminada de navegación
    setAboutModalOpen(true);
  };

  const closeAboutModal = () => {
    setAboutModalOpen(false);
  };
  const scrollToServicios = () => {
    const serviciosSection = document.getElementById("Servicios");

    if (serviciosSection) {
      serviciosSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="nav__menu container">
      <div className="menu-button">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className="nav__ul">
        <li className="nav__li">
          <a className="a-menu" icon="./images/logo.png" href="/">
            Inicio
          </a>
        </li>
        <li className="nav__li">
          <a className="a-menu " href="/" onClick={openAboutModal}>
            Mi Perfil
          </a>
          <Modal
            isOpen={isAboutModalOpen}
            onRequestClose={closeAboutModal}
            contentLabel="Modal Acerca de"
            className=" modal-background"
            overlayClassName="modal-content"
          >
            <h2 className="modal__title">Mi Perfil</h2>
            <img
              src={andrea}
              alt="Imagen de Acerca de"
              className="modal__imagen"
            />

            <p className="modal__tex">
              Psicóloga con estudios en atención en salud mental, amplia
              experiencia en intervención y acompañamiento a niños, adolescentes
              y adultos. A través de un enfoque cognitivo conductual, busco
              proporcionarte herramientas para el fortalecimiento de tus
              recursos personales y habilidades de enfrentamiento ante
              situaciones difíciles, potenciando el desarrollo de capacidades
              como adaptación al cambio, relaciones interpersonales y pautas de
              autocuidado que te ayudarán a mejorar tu salud mental y emocional.
            </p>
            <button className="modal-close-button" onClick={closeAboutModal}>
              Cerrar
            </button>
          </Modal>
        </li>
        <li className="nav__li">
          <a className="a-menu" href="#Servicios" onClick={scrollToServicios}>
            Servicios
          </a>
        </li>
        <li className="nav__li">
          <a className="a-menu" href="/contacto">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
