"use client";

import React, { useState } from "react";
import "./ContactForm.css";
import emailjs from "emailjs-com";

function ContactForm() {
  const [formInputs, setFormInputs] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: "",
  });
  const [fullNameError, setFullNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    // Validate inputs
    let valid = true;
    if (!formInputs.fullname) {
      setFullNameError(true);
      valid = false;
    } else {
      setFullNameError(false);
    }
    if (!formInputs.email || !/\S+@\S+\.\S+/.test(formInputs.email)) {
      alert("Veuillez entrer une adresse email valide.");
      valid = false;
    }
    if (!formInputs.message) {
      alert("Veuillez entrer votre message.");
      valid = false;
    }

    if (!valid) return;

    // Send email
    emailjs
      .send(
        "service_05fedmk",
        "template_k51296l",
        {
          to_name: "Recipient Name", // Remplacez par le nom du destinataire
          from_name: formInputs.fullname,
          phone: formInputs.phone,
          reply_to: formInputs.email,
          message: formInputs.message,
        },
        "0u9VrxsqYCtsh2b6U"
      )
      .then(
        (response) => {
          console.log("SUCCÈS!", response.status, response.text);
          alert("Message envoyé avec succès !");
          setFormInputs({ fullname: "", phone: "", email: "", message: "" }); // Reset form
        },
        (error) => {
          console.error("ÉCHEC...", error);
          alert(
            "Échec de l'envoi du message. Veuillez vérifier votre connexion internet et réessayer."
          );
        }
      );
  };

  return (
    <section className="wrapper">
      <div className="box">
        <div className="title-container">
          <h2 className="title">Besoin d'aide pour un projet professionnel?</h2>
          <h2 className="title">
            Collaborons ensemble pour atteindre l'excellence!
          </h2>
        </div>
        <ul>
          <li>
            <span>+X XXX-XXX-XXXX</span>
          </li>
          <li>
            <span>example@gmail.com</span>
          </li>
          <li>
            <span>XX xxxx XX, Location, XX xxx, Country</span>
          </li>
        </ul>
      </div>

      <div className="box">
        <div className="box-r">
          <div className="form-box">
            <div className="form-title">
              <h2>Prenez contact</h2>
            </div>
            <form onSubmit={submitHandler}>
              <div className="one-line">
                <div className="box-input">
                  <input
                    type="text"
                    className={`text ${fullNameError ? "red" : ""}`}
                    required
                    placeholder="Nom et prénom.."
                    value={formInputs.fullname}
                    onChange={(e) =>
                      setFormInputs({ ...formInputs, fullname: e.target.value })
                    }
                  />
                </div>
                <div className="box-input">
                  <input
                    type="text"
                    className={`${phoneError ? "red" : ""}`}
                    placeholder="votre téléphone"
                    value={formInputs.phone}
                    onChange={(e) =>
                      setFormInputs({ ...formInputs, phone: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="box-input">
                <input
                  type="email"
                  className="text"
                  required
                  placeholder="email.."
                  value={formInputs.email}
                  onChange={(e) =>
                    setFormInputs({ ...formInputs, email: e.target.value })
                  }
                />
              </div>
              <div className="box-input">
                <textarea
                  cols="30"
                  rows="5"
                  placeholder="Votre message.."
                  value={formInputs.message}
                  onChange={(e) =>
                    setFormInputs({ ...formInputs, message: e.target.value })
                  }
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-send">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
