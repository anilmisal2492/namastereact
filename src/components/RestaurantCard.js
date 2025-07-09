const RestaurantCard = (props) => {

  // const { name, cloudinaryImageId, costForTwo,cuisines, avgRating } = props.restData;
  const name = props.restData.info.name;
  const cloudinaryImageId = props.restData.info.cloudinaryImageId;
  const avgRating = props.restData.info.avgRating;
  const cuisines = props.restData.info.cuisines;
  const costForTwo = props.restData.info.costForTwo;
  // const { cloudinaryImageId } = props.restData.info.cloudinaryImageId;
  return (
    <div className="restro-card">
      <div className="img-logo">
        <img src={`${"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"}${cloudinaryImageId}`}></img>
      </div>
      <h2> {name}</h2>
      <h3>{cuisines}</h3>
      <h3>{costForTwo}</h3>
      <h3>{avgRating} star</h3>
      <h3>38 minutes</h3>
    </div>
  );
};
export default RestaurantCard;
