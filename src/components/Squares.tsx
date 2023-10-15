import React from "react"

type SquaresProps = {
  top: string;
  right: string;
  bottom: string;
  left: string;
};

const Squares: React.FC<SquaresProps> = ({
  top,
  right,
  bottom,
  left,
}: SquaresProps) => {
  return (
    <div
      aria-hidden="true"
      className={`absolute ${top} ${right} ${bottom} ${left} w-7 h-7`}
    >
      <div className="w-5 h-5 shadow-lg bg-gradient-to-tr from-sky-200 to-purple-300 absolute left-0 top-0"></div>
      <div className="w-3 h-3 shadow-lg rounded-full bg-gradient-to-tr from-green-200 to-emerald-300 absolute right-1 top-3"></div>
      <div className="w-2 h-2 shadow-lg bg-gradient-to-tr from-purple-200 to-pink-300 absolute left-1 bottom-4"></div>
    </div>
  );
};

export default Squares;
