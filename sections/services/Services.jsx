import Card from "@/components/Card";
import data from "./data"; // Added '.js' file extension
import "./services.css";

const Services = () => {
  return (
    <section id="services">
      <h2>Skills</h2>
      <p>My Skills</p>
      <div className="container services__container" data-aos="fade-up">
        {data.map((item, index) => {
          return (
            <Card key={index} className="service light">
              <div className="service__icon">{item.icon}</div>
              <div className="service__details">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
