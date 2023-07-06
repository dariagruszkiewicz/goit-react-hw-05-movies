import axios from 'axios';

const API_KEY = 'e25adf6fd43023750aef7ea0faccf3f4';
const URL = 'https://api.themoviedb.org/3';
export const IMG_URL = 'https://image.tmdb.org/t/p/w500';

//wyszukiwanie najpopularniejszych filmów
export const fetchApi = async () => {
  const response = await axios.get(`${URL}/trending/all/day`, {
    params: { api_key: API_KEY },
  });
  const data = response.data.results;
  return data;
};

//wyszukiwanie filmów po query
export const fetchApiByQuery = async searchValue => {
  const response = await axios.get(`${URL}/search/movie`, {
    params: {
      query: searchValue,
      api_key: API_KEY,
    },
  });
  const data = response.data.results;
  return data;
};

//wyszukiwanie pełnej informacji o filmie
export const fetchApiDetails = async movieId => {
  const response = await axios.get(`${URL}/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
  });
  const data = response.data;
  console.log(data);
  return data;
};
