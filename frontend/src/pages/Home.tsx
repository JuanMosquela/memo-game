import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Board from "../components/Board";
import { resetGame, setGameDifficulty } from "../redux/slices/gameSlice";
import { useEffect } from "react";
import alert from "../assets/alert.png";

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
      <div className=" relative bg-white  p-6 rounded-xl">
        <img
          src={alert}
          alt=""
          className="absolute top-[-40px]  left-0 right-0 w-[200px] h-[200px] object-contain shadow-md rounded-full block m-auto  bg-white"
        />
        <div className="space-y-4 mt-[180px]   ">
          <h1 className="text-3xl font-bold uppercase">
            Rick & Morty MemoGame
          </h1>
          <p className="text-slate-700  font-semibold text-md ">
            Find all the pairs of cards to complete the game
          </p>
          <p className="text-slate-700  mb-4 font-semibold text-md ">
            Select the difficulty and start playing
          </p>

          <button
            className="block w-full bg-green-400 py-3 rounded-md "
            onClick={() => handleClick("normal")}
          >
            <Link
              className="  text-white font-semibold text-center text-md"
              to="game"
            >
              Normal
            </Link>
          </button>
          <button
            className="block w-full bg-green-400 py-3 rounded-md "
            onClick={() => handleClick("hard")}
          >
            <Link
              className=" text-white font-semibold text-center text-md"
              to="game"
            >
              Hard
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};
export default Home;
