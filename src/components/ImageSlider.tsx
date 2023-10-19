import React, { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

type Project = {
  title: string;
  body: string;
  images: string[];
  video: string;
  tech: { text: string; color: string }[];
  webLink: string;
  codeLink: string;
};

interface ImageSliderProps {
  proj: Project;
  mobile: boolean;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ proj, mobile }) => {
  const [imageSlideIndex, setImageSlideIndex] = useState(0);

  return (
    <div className="overflow-x-clip relative bg-black">
      <button
        className={`${
          mobile
            ? "bg-black bg-opacity-50 text-white"
            : "bg-black bg-opacity-0 px-5 text-transparent hover:bg-opacity-50 hover:text-white"
        } z-10 cursor-pointer absolute right-0 top-0 bottom-0 flex justify-center duration-300 items-center p-2`}
        onClick={() =>
          setImageSlideIndex((prev) =>
            prev === proj.images.length ? 0 : prev + 1
          )
        }
      >
        <BsFillArrowRightCircleFill />
      </button>
      <button
        className={`${
          mobile
            ? "bg-black bg-opacity-50 text-white"
            : "bg-black bg-opacity-0 px-5 text-transparent hover:bg-opacity-50 hover:text-white"
        } z-10 cursor-pointer absolute left-0 top-0 bottom-0 flex justify-center duration-300 items-center p-2`}
        onClick={() =>
          setImageSlideIndex((prev) =>
            prev === 0 ? proj.images.length : prev - 1
          )
        }
      >
        <BsFillArrowLeftCircleFill />
      </button>
      <div
        className="flex justify-start items-center duration-300 h-full w-[100%]"
        style={{
          transform: `translateX(-${imageSlideIndex * 100}%)`,
        }}
      >
        <video src={proj.video} autoPlay muted loop playsInline className="" />

        {proj.images.map((img: string, imgIndex: number) => (
          <img
            key={imgIndex}
            src={img}
            alt="website"
            className="object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
