import { useSelector } from "react-redux";
import { selectGame } from "../redux/slices/gameSlice";
import { FaCoins } from "react-icons/fa";

type PointsProps = {
  bgColor: boolean;
};

const Points = ({ bgColor }: PointsProps) => {
  const { points } = useSelector(selectGame);

  return (
    <span
      className={`${
        bgColor && "bg-yellow-200"
      }  text-black font-semibold w-[80px] h-[40px] rounded-md  flex justify-center gap-4 items-center overflow-hidden `}
    >
      <FaCoins />
      {points !== 0 ? `+${points}` : points}
    </span>
  );
};
export default Points;
