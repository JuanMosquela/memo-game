import { useEffect, useRef, useState } from "react";
import back from "../assets/back.jpg";

type CardProps = {
  image: string;
  onClick: (id: number) => void;
  id: number;
  isInactive: boolean;
  isFlipped: boolean;
  isDisabled: boolean;
};

const Card = (props: CardProps) => {
  const handleClick = () => {
    !props.isFlipped && !props.isDisabled && props.onClick(props.id);
  };

  return (
    <figure
      onClick={handleClick}
      className=" relative h-[220px] w-[200px] group [perspective:500px]  "
    >
      <div
        className={` ${
          props.isFlipped &&
          "[transform-style:preserve-3d] [transform:rotateY(180deg)] duration-500  "
        } absolute inset-0 `}
      >
        <div className="absolute z-40 inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] ">
          <img
            src={props.image}
            alt={""}
            className={` rounded-md  w-full h-full  `}
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
