import React, { useState, useEffect } from "react";
import { useGetPastriesWonQuery } from "../slices/gameApiSlice";

function Game() {
  const [diceArray, setDiceArray] = useState([]);
  const [castCounter, setCastCounter] = useState(3);
  const [hasWon, setHasWon] = useState(false);
  const [pastries, setPastries] = useState(0);

  const { data, isSuccess } = useGetPastriesWonQuery(pastries);

  const rollDice = () => {
    const results = Array.from(
      { length: 5 },
      () => Math.floor(Math.random() * 6) + 1
    );

    setDiceArray(results);
    setCastCounter(castCounter - 1);
    setPastries((prevPastries) => {
      const combination = detectCombination(results);
      if (combination === "Paire") {
        return prevPastries + 2;
      } else if (combination === "Brelan") {
        return prevPastries + 3;
      } else if (combination === "Carré") {
        return prevPastries + 4;
      }

      return prevPastries;
    });
  };

  const diceImage = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
  ];

  function detectCombination(diceArray) {
    const occurrences = {};
    diceArray.forEach((value) => {
      occurrences[value] = (occurrences[value] || 0) + 1;
    });

    if (Object.values(occurrences).includes(4)) {
      setHasWon(true);
      return "Carré";
    } else if (Object.values(occurrences).includes(3)) {
      setHasWon(true);
      return "Brelan";
    } else if (Object.values(occurrences).includes(2)) {
      setHasWon(true);
      return "Paire";
    }

    return "Aucune combinaison";
  }

  return (
    <div id="wrapper-game">
      <h1>Le jeu du yams</h1>
      <div id="regles">
        <p>
          Vous avez <strong>{castCounter}</strong> lancés
        </p>
        <p>
          Si vous obtenez une paire, vous gagnez <strong>2</strong> patisseries
        </p>
        <p>
          Si vous obtenez un brelan, vous gagnez <strong>3</strong> patisseries
        </p>
        <p>
          Si vous obtenez un carré, vous gagnez <strong>4</strong> patisseries
        </p>
        <p>Bonne chance !</p>
      </div>
      {castCounter === 3 ? (
        <div id="base-display">
          <img src={diceImage[0]} alt="" />
          <img src={diceImage[0]} alt="" />
          <img src={diceImage[0]} alt="" />
          <img src={diceImage[0]} alt="" />
          <img src={diceImage[0]} alt="" />
        </div>
      ) : (
        <div id="dice-display">
          {diceArray.map((result, index) => {
            return <img src={diceImage[result - 1]} key={index} alt="" />;
          })}
        </div>
      )}

      {hasWon ? (
        <div id="victory">
          <p id="success">Bravo ! Vous avez gagné {pastries} patisseries</p>
          {isSuccess &&
            data.map((pastrie, id) => (
              <p key={id}>
                Vous avez gagné 1 <i>{pastrie.name}</i>
              </p>
            ))}
        </div>
      ) : castCounter <= 0 ? (
        <p id="finish">Jeu terminé</p>
      ) : (
        <button id="roll" onClick={() => rollDice()}>
          Lancer les dés
        </button>
      )}
    </div>
  );
}

export default Game;
