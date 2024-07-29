"use client";
import { useThemeContext } from "@/context/theme-context";
import data from "@/sections/portfolio/data";
import "./ProjectDetail.css";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

function ProjectDetail() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const router = useRouter();
  if (!isAuthenticated) router.push("/login");
  let projectContent = {};
  const { id } = useParams();

  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      projectContent = data[i];
      break;
    } else {
      projectContent = null;
    }
  }

  const { themeState } = useThemeContext();

  if (projectContent != null) {
    return (
      <main
        id="main"
        className={`${themeState.primary} ${themeState.background}`}
      >
        <div className="wrappr">
          <div className="sub-contain">
            <h1>{projectContent.title}</h1>
            <div className="img-container">
              <Image src={projectContent.image} alt="project-img" />
            </div>
            <div className="tech-stack">
              <p>
                <b>Description: </b>
                {projectContent.desc}
              </p>
            </div>
            <a
              href={projectContent.github}
              className="btn sm primary git"
              target="_blank"
              rel="noopener noreferrer"
            >
              - Github -{" "}
            </a>
          </div>
        </div>
      </main>
    );
  } else {
    return <div>Page Not Found</div>;
  }
}

export default ProjectDetail;
