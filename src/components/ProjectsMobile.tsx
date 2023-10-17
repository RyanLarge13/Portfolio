import { useState } from "react";
import projects from "../constants/projects";
import ImageSlider from "./ImageSlider";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const Projects = () => {
  const [project, setProject] = useState(0);

  return (
    <div className="lg:hidden min-h-[95vh] overflow-x-hidden flex justify-start items-start bg-slate-100 relative">
      {projects.map((proj, index) => (
        <div
          key={index}
          className="min-w-full duration-300"
          style={{ transform: `translateX(-${project * 100}%)` }}
        >
          <ImageSlider proj={proj} />
          <div className="p-3">
            <h2 className="text-lg font-semibold">{proj.title}</h2>
            <p className="mt-3 max-w-[400px] text-sm">{proj.body}</p>
            <div className="flex flex-wrap gap-3 my-10">
              {proj.tech.map((tech, techIndex) => (
                <div
                  key={techIndex}
                  className={`${tech.color} rounded-full py-1 px-3 shadow-md`}
                >
                  <p>{tech.text}</p>
                </div>
              ))}
            </div>
            <button className="rounded-md px-4 py-2 font-semibold bg-gradient-to-tr from-purple-200 to-purple-300 shadow-md w-full">
              <a href={proj.webLink}>Website</a>
            </button>
            <button className="mt-3 rounded-md px-4 py-2 font-semibold bg-gradient-to-tr from-purple-100 to-purple-200 shadow-md w-full">
              <a href={proj.codeLink}>Git Repo</a>
            </button>
          </div>
        </div>
      ))}
      <div
        className="z-10 text-xl absolute right-5 bottom-10 text-black flex justify-center items-center p-2"
        onClick={() =>
          setProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
        }
      >
        <BsFillArrowRightCircleFill />
      </div>
      <div
        className="z-10 text-xl absolute left-5 bottom-10 text-black flex justify-center items-center p-2"
        onClick={() =>
          setProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
        }
      >
        <BsFillArrowLeftCircleFill />
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center items-center gap-x-3">
        {projects.map((_, index) => (
          <div
            key={index}
            className={`rounded-full shadow-md ${
              project === index ? "w-4 h-4 bg-black" : "w-3 h-3 bg-slate-500"
            } duration-300`}
            onClick={() => setProject(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
