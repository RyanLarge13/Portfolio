import projects from "../constants/projects.ts";
import ImageSlider from "./ImageSlider.tsx";

type Proj = {
  title: string;
  body: string;
  images: string[];
  video: string;
  tech: { text: string; color: string }[];
  webLink: string;
  codeLink: string;
};

const ProJectsDesktop = () => {
  return (
    <div className="hidden lg:block">
      {projects.map((proj: Proj, index: number) =>
        index % 2 === 0 ? (
          <div key={index} className="grid grid-cols-2">
            <div>
              <ImageSlider proj={proj} mobile={false} />
            </div>
            <div className="p-5 flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-bold">{proj.title}</h2>
                <p className="mt-3 max-w-[400px] text-sm">{proj.body}</p>
                <div className="flex flex-wrap gap-3 my-10">
                  {proj.tech.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className={`${tech.color} rounded-full py-1 px-3 shadow-md text-sm`}
                    >
                      <p>{tech.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <button className="rounded-md px-4 py-2 font-semibold bg-gradient-to-tr from-purple-200 to-purple-400 shadow-md w-full">
                  <a href={proj.webLink}>Website</a>
                </button>
                <button className="mt-3 rounded-md px-4 py-2 font-semibold bg-gradient-to-tr from-purple-100 to-purple-200 shadow-md w-full">
                  <a href={proj.codeLink}>Git Repo</a>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div key={index} className="grid grid-cols-2">
            <div className="p-5 flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-bold">{proj.title}</h2>
                <p className="mt-3 max-w-[400px] text-sm">{proj.body}</p>
                <div className="flex flex-wrap gap-3 my-10">
                  {proj.tech.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className={`${tech.color} rounded-full py-1 px-3 shadow-md text-sm`}
                    >
                      <p>{tech.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <button className="rounded-md px-4 py-2 font-semibold bg-gradient-to-tr from-purple-200 to-purple-400 shadow-md w-full">
                  <a href={proj.webLink}>Website</a>
                </button>
                <button className="mt-3 rounded-md px-4 py-2 font-semibold bg-gradient-to-tr from-purple-100 to-purple-200 shadow-md w-full">
                  <a href={proj.codeLink}>Git Repo</a>
                </button>
              </div>
            </div>
            <div>
              <ImageSlider proj={proj} mobile={false} />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ProJectsDesktop;
