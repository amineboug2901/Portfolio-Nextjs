import React from "react";
import Card from "@/components/Card";
import Image from "next/image";
import { redirect } from "next/navigation";
import Link from "next/link";

const Project = ({ project }) => {
  // const CardClickHandler = () => {
  //   console.log("click");
  //   redirect(`/project-detail/${project.id}`);
  // };
  return (
    <Link href={`/project-detail/${project.id}`}>
      <Card className="portfolio__project pointer">
        <div className="portfolio__project-image">
          <Image src={project.image} alt={`Project: ${project.title}`} />
        </div>
        <h4>{project.title}</h4>
        {/* <p>{project.desc}</p> */}
        <div className="tech-stack">
          <ul className="ul">
            {project.techStack.map((val, index) => {
              return <li key={index}>{val}</li>;
            })}
          </ul>
        </div>
        <div className="portfolio__project-cta">
          {project.id === 9 ? (
            <a
              href={project.url}
              className="btn sm primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Udemy
            </a>
          ) : project.id === 10 ? (
            <a
              href={project.youtube}
              className="btn sm primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
          ) : (
            <a href={""} className="btn sm primary">
              - See More -
            </a>
          )}
        </div>
      </Card>
    </Link>
  );
};

export default Project;
