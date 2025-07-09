import { useEffect, useState } from "react";
import { SWIGY_URL } from "../utils/constant";

const RestaurantMenu = () => {
  const [restData, setRestData] = useState(null);
  useEffect(() => {
    fetchRest();
  }, []);
  const fetchRest = async () => {
    const data = await fetch(SWIGY_URL);
    const dataJson = await data.json();
    console.log("dataJson", dataJson);
    setRestData(dataJson);
  };
  console.log(restData?.info?.name);
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
