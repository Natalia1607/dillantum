import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

const options = {
  params: {
    maxResults: 50,
  }, 
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST,
  },
};

export const fetchAPI = async (url) => {
  const { data } = await axios.get(`${baseUrl}/${url}`, options);
  
  return data;
};
