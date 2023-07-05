import axios from 'axios';

const API_KEY = 'e25adf6fd43023750aef7ea0faccf3f4';

//wyszukiwanie najpopularniejszych filmów
export const fetchApi = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/all/day',
    {
      params: { api_key: API_KEY },
    }
  );
  const data = response.data.results;
  return data;
};

//wyszukiwanie filmów po query
export const fetchApiByQuery = async searchValue => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/search/movie',
    {
      params: {
        query: searchValue,
        api_key: API_KEY,
      },
    }
  );
  const data = response.data.results;
  return data;
};

//wyszukiwanie pełnej informacji o filmie
export const fetchApiDetails = async id => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  const data = response.data.results;
  console.log(data);
  return data;
};
