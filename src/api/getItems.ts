import axios from "axios";

export const getItems = async () => {
  const res = await axios.get("/items");
  return res.data;
};
