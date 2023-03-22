import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Board from "../components/Board";
import { resetGame, setGameDifficulty } from "../redux/slices/gameSlice";
import { useEffect } from "react";
import alert from "../assets/alert.png";
import logo from "../assets/logo.svg";

const Home = () => {
  const dispatch = useDispatch();

  const handleClick = (value: string) => {
    dispatch(setGameDifficulty(value));
  };
  // useEffect(() => {
  //   dispatch(resetGame());
  // }, []);

  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className=" relative bg-dark  p-6 rounded-xl w-[360px] ">
        <img
          src={alert}
          alt=""
          className="absolute top-[-40px]  left-0 right-0 w-[200px] h-[200px] object-contain shadow-md rounded-full block m-auto"
        />
        <div className=" space-y-2 mt-[160px]   ">
          <div className="">
            <img className="mb-6" src={logo} alt="" />
            <p className="text-letter  font-semibold text-md mb-2 ">
              Find all the pairs of cards to complete the game and save the
              multiverse.
            </p>
            <p className="text-letter  mb-6 font-semibold text-md ">
              Select the difficulty and start playing:
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <Link
              className="  text-letter font-semibold text-center text-md "
              to="/game"
            >
              <button
                className="block w-full bg-green hover:bg-greenhover hover:text-dark duration-200 py-3 rounded-md "
                onClick={() => handleClick("normal")}
              >
                Normal
              </button>
            </Link>
            <Link
              className="  text-letter font-semibold text-center text-md"
              to="/game"
            >
              <button
                className="block w-full bg-green hover:bg-greenhover hover:text-dark duration-200 py-3 rounded-md "
                onClick={() => handleClick("hard")}
              >
                Hard
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
