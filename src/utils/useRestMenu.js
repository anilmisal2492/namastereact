import { useEffect, useState } from "react";
import { SWIGY_URL } from "../utils/constant";

const useRestMenu = () => {
  const [restData, setRestData] = useState(null);
  useEffect(() => {
    fetchRest();
  }, []);
  const fetchRest = async () => {
    const data = await fetch(SWIGY_URL);
    const dataJson = await data.json();

    setRestData(dataJson);
  };

  return restData;
};
export default useRestMenu;
