import axios from 'axios';

const API_KEY = 'e25adf6fd43023750aef7ea0faccf3f4';

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
