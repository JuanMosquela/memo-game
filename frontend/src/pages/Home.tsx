import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Board from "../components/Board";
import { resetGame, setGameDifficulty } from "../redux/slices/gameSlice";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch();

  const handleClick = (value: string) => {
    dispatch(setGameDifficulty(value));
  };
  useEffect(() => {
    dispatch(resetGame());
  }, []);

  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className=" flex bg-white rounded-md p-6">
        <div className="space-y-4   ">
          <h1 className="text-3xl font-bold uppercase">
            Rick & Morty MemoGame
          </h1>
          <p className="text-slate-700 text-sm ">
            Find all the pairs of cards to complete the game
          </p>
          <div className="  rounded-md  flex flex-col gap-2">
            <p className="text-slate-700 text-sm mb-4 ">
              Select the difficulty and start playing
            </p>
            <button onClick={() => handleClick("normal")}>
              <Link
                className="bg-green-400 rounded-md py-3 text-white font-semibold text-center text-md"
                to="game"
              >
                Normal
              </Link>
            </button>
            <button onClick={() => handleClick("hard")}>
              <Link
                className="bg-green-400 rounded-md py-3 text-white font-semibold text-center text-md"
                to="game"
              >
                Hard
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
