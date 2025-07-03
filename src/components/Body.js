import RestaurantCard from "./RestaurantCard";
import Search from "./Search";
import restList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body-container">
      <div className="search-container">
        <Search />
      </div>
      <div className="card-container">
        {restList.map((restarants) => (
          <RestaurantCard key={restarants.id} restData={restarants} />
        ))}
      </div>
    </div>
  );
};
export default Body;
