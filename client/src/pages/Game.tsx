import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Board from "../components/Board";
import { selectGame } from "../redux/slices/gameSlice";
import { RootState } from "../redux/store";

const Game = () => {
  return (
    <div>
      <Board />
    </div>
  );
};
export default Game;
