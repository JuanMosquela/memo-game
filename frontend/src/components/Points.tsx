import { useSelector } from "react-redux";
import { selectGame } from "../redux/slices/gameSlice";
import { FaCoins } from "react-icons/fa";

const Points = () => {
  const { points } = useSelector(selectGame);

  return (
    <span className="bg-yellow-200 text-black font-semibold w-[80px] h-[40px] flex justify-center gap-4 items-center overflow-hidden ">
      <FaCoins className="" />
      {points}
    </span>
  );
};
export default Points;
