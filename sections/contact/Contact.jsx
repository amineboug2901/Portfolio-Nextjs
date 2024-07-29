import contacts from "./data";
import "./contact.css";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contactez-moi</h2>
      <p>Envoyez-moi un message via l&apos;un des liens ci-dessous !</p>

      <div className="container contact__container" data-aos="fade-up">
        {
          // contacts.map(contact => contact.link == '/contact' ?  <Link key={contact.id} to={`${contact.link}`}>{contact.icon}</Link> : <a key={contact.id} href={contact.link} target="_blank" rel="noopener noreferrer">{contact.icon}</a>)
          contacts.map((contact) => (
            <Link
              key={contact.id}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.icon}
            </Link>
          ))
        }
      </div>
    </section>
  );
};

export default Contact;
