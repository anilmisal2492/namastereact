import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filterrestaurantList, setFilterRestaurantList] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchRestaurant();
  }, []);

  const fetchRestaurant = async () => {
    const data = await fetch(
      "https://swiggy-api-4c740.web.app/swiggy-api.json"
    );

    const jsonData = await data.json();
    console.log(
      "jsonData",
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setRestaurantList(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterRestaurantList(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  // Condtional rendering
  if (restaurantList?.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body-container">
      <div className="search-container">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            console.log(e.target.value);
            setSearchText(e.target.value);
          }}
        ></input>{" "}
        <button
          onClick={() => {
            const filterRestaurent = restaurantList.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(searchText.toLocaleLowerCase());
            });
            console.log("filterRestaurent", filterRestaurent);
            setFilterRestaurantList(filterRestaurent);
          }}
        >
          Search
        </button>
        <button
          onClick={() => {
            const filterList = restaurantList.filter(
              (rest) => rest?.info?.avgRating > 4.2
            );
            setRestaurantList(filterList);
          }}
        >
          Top rated Restaurant
        </button>
      </div>
      <div className="card-container">
        {filterrestaurantList.map((restarants) => (
          <RestaurantCard key={restarants?.info?.id} restData={restarants} />
        ))}
      </div>
    </div>
  );
};
export default Body;
