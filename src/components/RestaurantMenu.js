import { useEffect, useState } from "react";
import { SWIGY_URL } from "../utils/constant";
import useRestMenu from "../utils/useRestMenu";

const RestaurantMenu = () => {
  const restData = useRestMenu();
  return (
    <div>
      <h1>Restaurant Menu</h1>
      <h2>
        {" "}
        {
          restData?.data.cards[1].card.card.gridElements.infoWithStyle
            .restaurants[0].info.name
        }
      </h2>
      <h2>
        {" "}
        {
          restData?.data.cards[1].card.card.gridElements.infoWithStyle
            .restaurants[0].info.areaName
        }
      </h2>
      <h3>name of Menu</h3>
    </div>
  );
};
export default RestaurantMenu;
