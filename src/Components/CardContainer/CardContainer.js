import React from "react";
import Cards from "../Cards/Cards";
import "./CardContainer.scss";

const CardContainer = ({ cardsToBeRendered }) => {
  const displayCards = cardsToBeRendered.map(cards => <Cards key={cards.name} {...cards} />);

  return (
    <div className='cardContainer'>
      {displayCards}
    </div>
  )
};

export default CardContainer;