import { ChangeEvent, useEffect, useRef, useState } from "react";
import {
  rick,
  morty,
  summer,
  jerry,
  beth,
  evilMorty,
} from "../../public/assets/index";
import Card from "../components/Card";

// const characters = [
//   "../../public/assets/rick.jpeg",
//   "../../public/assets/morty.jpeg",
//   "../../public/assets/summer.jpeg",
//   "../../public/assets/beth.jpeg",
//   "../../public/assets/jerry.jpeg",
//   "../../public/assets/evilMorty.jpeg",
// ];

let characters = [
  {
    img: "../../public/assets/rick.jpeg",
    id: 1,
  },
  {
    img: "../../public/assets/morty.jpeg",
    id: 2,
  },
  {
    img: "../../public/assets/summer.jpeg",
    id: 3,
  },
  {
    img: "../../public/assets/beth.jpeg",
    id: 4,
  },
  {
    img: "../../public/assets/jerry.jpeg",
    id: 5,
  },
  {
    img: "../../public/assets/evilMorty.jpeg",
    id: 6,
  },
  {
    img: "../../public/assets/rick.jpeg",
    id: 1,
  },
  {
    img: "../../public/assets/morty.jpeg",
    id: 2,
  },
  {
    img: "../../public/assets/summer.jpeg",
    id: 3,
  },
  {
    img: "../../public/assets/beth.jpeg",
    id: 4,
  },
  {
    img: "../../public/assets/jerry.jpeg",
    id: 5,
  },
  {
    img: "../../public/assets/evilMorty.jpeg",
    id: 6,
  },
].sort(() => (Math.random() > 0.5 ? 1 : -1));

const Home = () => {
  const [cards, setCards] = useState(characters);
  const [openCards, setOpenCards] = useState<number[]>([]);

  const checkMatch = () => {
    const [cardOne, cardTwo] = openCards;
    console.log(cardOne, cardTwo);

    if (cardOne == cardTwo) {
      console.log("son iguales");
    } else {
      console.log("no son iguales");
      setOpenCards([]);
    }
  };

  const handleClick = (i: any) => {
    console.log(i);
    if (openCards.length == 1) {
      console.log("ya hay dos cartas");
      setOpenCards([...openCards, i]);
      return;
    }
    setOpenCards([i]);
  };

  useEffect(() => {
    if (openCards.length === 2) {
      setTimeout(checkMatch, 500);
    }
  }, [openCards]);

  console.log(openCards);

  return (
    <section className=" grid grid-cols-4 gap-4 ">
      {cards?.map((character, i) => (
        <Card key={i} img={character.img} id={i} handleClick={handleClick} />
      ))}
    </section>
  );
};
export default Home;
