import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Board from "../components/Board";
import { selectGame } from "../redux/slices/gameSlice";
import { RootState } from "../redux/store";

const Game = () => {
  const location = useLocation();
  const playMode = location.search.split("=")[1];

  const { difficulty } = useSelector(selectGame);

  return (
    <div>
      <Board playMode={difficulty} />
    </div>
  );
};
export default Game;
