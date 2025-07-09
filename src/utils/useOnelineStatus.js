import { useEffect, useState } from "react";

const UseOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    document.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    document.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  return onlineStatus;
};
export default UseOnlineStatus;
