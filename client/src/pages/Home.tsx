import { useEffect, useRef, useState } from "react";
import Card from "../components/Card";
import rick from "../../public/assets/rick.jpeg";

type Card = {
  card: any;
  index: number;
};

const Home = () => {
  const [cards, setCards] = useState<any>(
    [
      {
        img: "../../public/assets/rick.jpeg",
        id: 1,
        status: "",
      },
      {
        img: "../../public/assets/morty.jpeg",
        id: 2,
        status: "",
      },
      {
        img: "../../public/assets/summer.jpeg",
        id: 3,
        status: "",
      },
      {
        img: "../../public/assets/beth.jpeg",
        id: 4,
        status: "",
      },
      {
        img: "../../public/assets/jerry.jpeg",
        id: 5,
        status: "",
      },
      {
        img: "../../public/assets/evilMorty.jpeg",
        id: 6,
        status: "",
      },
      {
        img: "../../public/assets/rick.jpeg",
        id: 1,
        status: "",
      },
      {
        img: "../../public/assets/morty.jpeg",
        id: 2,
        status: "",
      },
      {
        img: "../../public/assets/summer.jpeg",
        id: 3,
        status: "",
      },
      {
        img: "../../public/assets/beth.jpeg",
        id: 4,
        status: "",
      },
      {
        img: "../../public/assets/jerry.jpeg",
        id: 5,
        status: "",
      },
      {
        img: "../../public/assets/evilMorty.jpeg",
        id: 6,
        status: "",
      },
    ].sort(() => (Math.random() > 0.5 ? 1 : -1))
  );
  const [openCards, setOpenCards] = useState<Array<number>>([]);
  const [clearedCards, setClearedCards] = useState<Array<number>>([]);
  const [shouldDisableAllCards, setShouldDisableAllCards] =
    useState<boolean>(false);
  const timeout = useRef<NodeJS.Timeout>(setTimeout(() => {}));

  const disable = () => {
    setShouldDisableAllCards(true);
  };
  const enable = () => {
    setShouldDisableAllCards(false);
  };

  const finishGame = () => {
    console.log(clearedCards.length);
    console.log(cards.length);
    if (clearedCards.length === cards.length) {
      console.log("juego terminado");
    }
  };

  const evaluate = () => {
    const [first, second] = openCards;
    console.log(first, second);
    enable();
    // check if first card is equal second card
    if (cards[first].id === cards[second].id) {
      console.log("coinciden");
      setClearedCards((prev) => [...prev, first, second]);
      setOpenCards([]);
      return;
    }
    console.log("no coinciden");
    // flip the cards back after 500ms duration
    timeout.current = setTimeout(() => {
      setOpenCards([]);
    }, 500);
  };

  const handleCardClick = (id: number) => {
    if (openCards.length === 1) {
      // in this case we have alredy selected one card
      // this means that we are finishing a move
      setOpenCards((prev) => [...prev, id]);

      disable();
    } else {
      // in this case this is the first card we select
      clearTimeout(timeout.current);
      setOpenCards([id]);
    }
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout = setTimeout(() => {});
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
    <section className="grid grid-cols-4 gap-4  rounded-md ">
      <img src={rick} alt="" />
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
  );
};
export default Home;
