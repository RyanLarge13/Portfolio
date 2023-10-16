import Squares from "../components/Squares";
import Me from "../assets/me.jpg";
import Typewriter from "typewriter-effect";
import Banner from "../assets/banner.svg";
import { motion } from "framer-motion";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";
import ProjectsMobile from "../components/ProjectsMobile";

const Home = () => {
  return (
    <>
      <section className="min-h-screen p-5 flex flex-col justify-end items-start">
        <Squares top={"top-40"} right={"right-20"} bottom={""} left={""} />
        <Squares top={"top-20"} right={""} bottom={""} left={"left-20"} />
        <Squares top={"top-80"} right={"right-40"} bottom={""} left={""} />
        <div className="absolute flex justify-center items-center top-20 right-0 left-0 overflow-x-clip">
          <motion.img
            whileHover={{ rotateZ: 0 }}
            initial={{ opacity: 0, y: -100, rotateZ: 0 }}
            animate={{
              opacity: 1,
              y: 0,
              rotateZ: 7,
              transformOrigin: "bottom left",
              transition: {
                rotateZ: { delay: 1, type: "spring", stiffness: 300 },
              },
            }}
            src={Banner}
            alt="banner"
            className="max-w-[95%]"
          />
        </div>
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
      <section className="min-h-screen relative" id="projects">
        <ProjectsMobile />
        {/* <div className="hidden lg:grid grid-cols-2 bg-slate-100 ">
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
          <div className="p-5">
            <h2 className="text-3xl">Troy Large Pastel</h2>
          </div>
          <div>
            <img
              src={TroyLarge}
              alt="calendar next gen"
              className="w-full object-cover"
            />
          </div>
          <div>
            <img
              src={WorkoutBlog}
              alt="calendar next gen"
              className="w-full object-cover"
            />
          </div>
          <div className="p-5">
            <h2 className="text-3xl">Workout Blog</h2>
          </div>
        </div> */}
      </section>
      <section className="min-h-screen"></section>
    </>
  );
};

export default Home;
