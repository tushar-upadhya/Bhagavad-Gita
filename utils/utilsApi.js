import axios from "axios";

const BASE_URL = "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/";
const options = {
  headers: {
    "X-RapidAPI-Key": "947162b802mshb99e34a9e50bacbp1e8c83jsn35dc3a87ef76",
    "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
  },
  params: { limit: "18" },
};

export const fetchData = async () => {
  try {
    const response = await axios.get(BASE_URL, options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
