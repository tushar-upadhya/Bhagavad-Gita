import axios from "axios";

export const options = {
  method: "GET",
  url: "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/1/verses/'",
  headers: {
    "X-RapidAPI-Key": "947162b802mshb99e34a9e50bacbp1e8c83jsn35dc3a87ef76",
    "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
  },
};

export const fetchData = () => {
  return axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
};
