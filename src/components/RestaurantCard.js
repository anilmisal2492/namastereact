const RestaurantCard = (props) => {
  console.log("props", props);
  const { title, image, titlMC, rating } = props.restData;
  return (
    <div className="restro-card">
      <div className="img-logo">
        <img src={image}></img>
      </div>
      <h2> {title}</h2>
      <h3>{titlMC}</h3>
      <h3>{rating} star</h3>
      <h3>38 minutes</h3>
    </div>
  );
};
export default RestaurantCard;
