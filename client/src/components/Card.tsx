import { useEffect, useRef, useState } from "react";
import back from "../../public/assets/back.jpg";

type CardProps = {
  img: string;
  id: number;
  handleClick: (id: number) => void;
};

const Card = ({ img, id, handleClick }: CardProps) => {
  return (
    <figure
      onClick={() => handleClick(id)}
      className=" relative h-[220px] w-[200px] group [perspective:500px]  "
    >
      <div
        className={` ${
          false &&
          "[transform-style:preserve-3d] [transform:rotateY(180deg)] duration-500 delay-200 "
        } absolute inset-0 `}
      >
        <div className="absolute z-40 inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] ">
          <img
            src={img}
            alt={img.split("/")[4]}
            className={`${
              false && "border border-red-400   rounded-md"
            } rounded-md  w-full h-full  `}
          />
        </div>
        <div className="absolute inset-0  ">
          <img className="  h-full w-full rounded-md  " src={back} alt="" />
        </div>
      </div>
    </figure>
  );
};
export default Card;
