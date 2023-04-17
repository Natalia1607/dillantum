import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
        'X-RapidAPI-Key': 'db5881c0ddmshc3a33b61c0fdf36p119379jsn2b45c9900b22',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    },
  });

  return data;
};
