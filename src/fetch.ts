export const fetchData = async (endpoint: string) => {
  const url = `https://weatherapi-com.p.rapidapi.com/search.json?q=${endpoint}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result || [];
  } catch (error) {
    console.error(error);
  }
};

export const fetchCityData = async (city: string, region: string) => {
  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}%2C%20%20${region}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result || {};
  } catch (error) {
    console.error(error);
  }
};
