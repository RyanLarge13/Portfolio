import Squares from "../components/Squares";
import Me from "../assets/me.jpg";
import Typewriter from "typewriter-effect";
import CalngDesk from "../assets/calng-desktop.png";
import Banner from "../assets/banner.svg";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";

const Home = () => {
  return (
    <>
      <section className="min-h-screen p-5 flex flex-col justify-end items-start">
        <Squares top={"top-40"} right={"right-20"} bottom={""} left={""} />
        <Squares top={"top-20"} right={""} bottom={""} left={"left-20"} />
        <Squares top={"top-80"} right={"right-40"} bottom={""} left={""} />
        <img
          src={Banner}
          alt="banner"
          className="absolute top-20 z-[-1] left-[50%] translate-x-[-50%] max-w-[95%]"
        />
        <img
          src={Me}
          alt="me"
          className="w-40 h-40 rounded-full shadow-lg mb-10"
        />
        <h1 className="text-4xl">
          Professional{" "}
          <span className="font-semibold text-purple-500">Fullstack</span>{" "}
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Web Developer")
                .pauseFor(2500)
                .deleteAll()
                .typeString("Mobile Developer")
                .pauseFor(2500)
                .deleteAll()
                .typeString("Desktop Developer")
                .pauseFor(2500)
                .deleteAll()
                .typeString("Backend Developer")
                .start();
            }}
          />
        </h1>
        <p className="mt-3 max-w-[400px]">
          My name is <span className="font-bold">Ryan Large</span>, fullstack
          web developer and cross platform application engineer. I am here to
          show you why I am the best answer.
        </p>
        <div className="mt-10 flex justify-center items-start text-xl gap-x-3">
          <a href="">
            <AiFillTwitterCircle className="text-sky-300" />
          </a>
          <a href="">
            <AiFillLinkedin className="text-blue-400 rounded-full" />
          </a>
          <a>
            <BiLogoFacebookCircle className="text-blue-400" />
          </a>
          <a>
            <AiFillInstagram className="text-red-500" />
          </a>
          <a>
            <AiFillGithub />
          </a>
        </div>
      </section>
      <section
        className="min-h-screen bg-slate-100 relative grid grid-cols-2"
        id="projects"
      >
        <div>
          <img
            src={CalngDesk}
            alt="calendar next gen"
            className="w-full object-cover"
          />
        </div>
        <div className="p-5">
          <h2 className="text-3xl">Calendar Next Generation</h2>
        </div>
      </section>
      <section className="min-h-screen"></section>
    </>
  );
};

export default Home;
