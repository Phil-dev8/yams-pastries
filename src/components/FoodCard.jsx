import React from "react";

function FoodCard({ elem }) {
  return (
    <div className="food-card">
      <img
        className="img-pastries"
        src={elem.image}
        alt="image de la patisserie"
      />
      <p className="pastrie-name">{elem.name}</p>
      <p className="pastrie-quantity">
        Quantité restante : <span>{elem.quantity}</span>
      </p>
    </div>
  );
}

export default FoodCard;
