import { useEffect, useRef, useState } from "react";
import Card from "./Card";
import rick from "../assets/rick.jpeg";
import morty from "../assets/morty.jpeg";
import summer from "../assets/summer.jpeg";
import beth from "../assets/beth.jpeg";
import jerry from "../assets/jerry.jpeg";
import evilMorty from "../assets/evilMorty.jpeg";
import adolf from "../assets/lincon.jpeg";
import doofus from "../assets/doofus.jpeg";
import Temporizador from "./Temporizador";
import Points from "./Points";
import { useDispatch, useSelector } from "react-redux";
import {
  selectGame,
  setGameFinished,
  setGameStatus,
  setGameTotalMoves,
  updatePoints,
} from "../redux/slices/gameSlice";
import ModalComponent from "./ModalComponent";

type Card = {
  card: any;
  index: number;
};

type BoardProps = {
  playMode: string;
};

const Board = ({ playMode }: BoardProps) => {
  const [cards, setCards] = useState<any>(
    [
      {
        img: rick,
        id: 1,
        status: "",
      },
      {
        img: morty,
        id: 2,
        status: "",
      },
      {
        img: summer,
        id: 3,
        status: "",
      },
      {
        img: beth,
        id: 4,
        status: "",
      },
      {
        img: jerry,
        id: 5,
        status: "",
      },
      {
        img: evilMorty,
        id: 6,
        status: "",
      },
      {
        img: doofus,
        id: 7,
        status: "",
      },
      {
        img: adolf,
        id: 8,
        status: "",
      },

      {
        img: rick,
        id: 1,
        status: "",
      },
      {
        img: morty,
        id: 2,
        status: "",
      },
      {
        img: summer,
        id: 3,
        status: "",
      },
      {
        img: beth,
        id: 4,
        status: "",
      },
      {
        img: jerry,
        id: 5,
        status: "",
      },
      {
        img: evilMorty,
        id: 6,
        status: "",
      },
      {
        img: doofus,
        id: 7,
        status: "",
      },
      {
        img: adolf,
        id: 8,
        status: "",
      },
    ].sort(() => (Math.random() > 0.5 ? 1 : -1))
  );
  const [openCards, setOpenCards] = useState<Array<number>>([]);
  // const [points, setPoints] = useState(0);
  const [clearedCards, setClearedCards] = useState<Array<number>>([]);
  const [shouldDisableAllCards, setShouldDisableAllCards] =
    useState<boolean>(false);

  const timeout = useRef(setTimeout(() => {}));

  const dispatch = useDispatch();

  const { points, moves } = useSelector(selectGame);

  const disable = () => {
    setShouldDisableAllCards(true);
  };
  const enable = () => {
    setShouldDisableAllCards(false);
  };

  const finishGame = () => {
    if (clearedCards.length === cards.length) {
      dispatch(setGameFinished(true));
      dispatch(setGameStatus("completed"));
      console.log(
        `juego terminado con ${points} y necesitaste ${moves} cantidad de movidas`
      );
    }
  };

  const evaluate = () => {
    const [first, second] = openCards;

    dispatch(setGameTotalMoves(1));

    enable();

    if (cards[first].id === cards[second].id) {
      // setPoints((prev) => prev + 1);
      dispatch(updatePoints(2));

      setClearedCards((prev) => [...prev, first, second]);
      setOpenCards([]);
      return;
    }

    timeout.current = setTimeout(() => {
      setOpenCards([]);
    }, 500);
  };

  const handleCardClick = (id: number) => {
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, id]);

      disable();
    } else {
      clearTimeout(timeout.current);
      setOpenCards([id]);
    }
  };

  useEffect(() => {
    let timeout = setTimeout(() => {});
    if (openCards.length === 2) {
      timeout = setTimeout(evaluate, 300);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [openCards]);

  useEffect(() => {
    finishGame();
  }, [clearedCards]);

  const checkIsFlipped = (id: number) => {
    return clearedCards.includes(id) || openCards.includes(id);
  };

  const checkIsInactive = (id: number) => {
    return clearedCards.includes(id);
  };

  return (
    <>
      <div className="min-h-screen flex  justify-center items-center  ">
        <div className="bg-white md:p-4 p-2   ">
          <section className="grid grid-cols-4 gap-4  rounded-md mb-4  ">
            {cards.map((card: any, i: number) => (
              <Card
                key={i}
                image={card.img}
                id={i}
                isDisabled={shouldDisableAllCards}
                isInactive={checkIsInactive(i)}
                isFlipped={checkIsFlipped(i)}
                onClick={handleCardClick}
              />
            ))}
          </section>
          <div className=" flex w-full  justify-end gap-4">
            <Points />
            <Temporizador />
          </div>
        </div>
        {/* <ModalComponent /> */}
      </div>
    </>
  );
};
export default Board;
