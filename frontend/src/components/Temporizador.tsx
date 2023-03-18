import { useEffect, useState, useRef } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  selectGame,
  setGameFinished,
  setGameStatus,
} from "../redux/slices/gameSlice";
import ModalComponent from "./ModalComponent";

const Temporizador = ({}) => {
  const { difficulty, status } = useSelector(selectGame);

  const dispatch = useDispatch();
  let [timerClock, setTimerClock] = useState(difficulty == "normal" ? 40 : 5);

  useEffect(() => {
    let timeout = setInterval(() => {
      if (status == "completed") {
        clearInterval(timeout);
        return;
      }

      if (timerClock <= 0) {
        dispatch(setGameStatus("timeout"));
        dispatch(setGameFinished(true));
        clearInterval(timeout);
        return;
      }

      setTimerClock((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(timeout);
    };
  }, [timerClock]);

  return (
    <>
      <span className="bg-black text-white font-semibold rounded-md  w-[80px] h-[40px] text-center flex justify-center items-center gap-4 ">
        <AiOutlineClockCircle className="text-white text-xl" />
        {timerClock}
      </span>

      <ModalComponent />
    </>
  );
};
export default Temporizador;
