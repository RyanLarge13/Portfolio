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
}

const ImageSlider: React.FC<ImageSliderProps> = ({ proj }) => {
  const [imageSlideIndex, setImageSlideIndex] = useState(0);

  return (
    <div className="overflow-x-clip relative bg-black">
      <div
        className="z-10 bg-black bg-opacity-50 absolute right-0 top-0 bottom-0 text-white flex justify-center items-center p-2"
        onClick={() =>
          setImageSlideIndex((prev) =>
            prev === proj.images.length ? 0 : prev + 1
          )
        }
      >
        <BsFillArrowRightCircleFill />
      </div>
      <div
        className="z-10 bg-black bg-opacity-50 absolute left-0 top-0 bottom-0 text-white flex justify-center items-center p-2"
        onClick={() =>
          setImageSlideIndex((prev) =>
            prev === 0 ? proj.images.length : prev - 1
          )
        }
      >
        <BsFillArrowLeftCircleFill />
      </div>
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
