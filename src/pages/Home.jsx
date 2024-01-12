import React from "react";
import { NavLink } from "react-router-dom";
import { useGetPastriesQuery } from "../slices/gameApiSlice";
import FoodCard from "../components/FoodCard";

function Home() {
  const { data, isLoading } = useGetPastriesQuery();
  const filteredData = data ? data.filter((elem) => elem.quantity !== 0) : null;

  return (
    <div id="wrapper">
      <h1 id="main-title">
        Tentez de gagner des patisseries en jouant au Yam's !
      </h1>

      <NavLink to="/play" id="link-play">
        <button>Jouer !</button>
      </NavLink>

      <h2>Lots restants :</h2>

      {isLoading ? (
        <p>Chargement</p>
      ) : (
        <div id="container">
          {filteredData.map((elem, index) => {
            return <FoodCard key={index} elem={elem} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Home;
