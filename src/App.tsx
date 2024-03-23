import { useState } from 'react';
import Nav from './components/Nav';
import List from './components/List';
import WeatherCard from './components/WeatherCard';
import { fetchData, fetchCityData } from './fetch';
import './App.css';

interface SelectedCities {
  location: {
    name: string;
    region: string;
    country: string;
  };
  current: {
    condition: {
      text: string;
      icon: string;
    };
    temp_f: number;
    feelslike_f: number;
    gust_mph: number;
    humidity: number;
    last_updated_epoch: number;
  };
}

function App() {
  const [cities, setCities] = useState(null);
  const [selectedCities, setSelectedCities] = useState<SelectedCities[]>([]);

  const handleSearch = async (city: string) => {
    const data = await fetchData(city);
    if (data.length) {
      setCities(data);
    }
  };

  const handleSearchCity = async (city: string, region: string) => {
    const data = await fetchCityData(city, region);

    if (Object.keys(data).length !== 0) {
      setSelectedCities([...selectedCities, data]);
      setCities(null);
    }
  };

  return (
    <div>
      <Nav handleSearch={handleSearch} />
      <div className='container'>
        {cities && (
          <>
            <h5 className='mb-4'>Choose the city:</h5>
            <List cities={cities} handleSearchCity={handleSearchCity} />
          </>
        )}
        <div className='d-flex flex-wrap col-12'>
          {selectedCities.length > 0 && <WeatherCard selectedCities={selectedCities as SelectedCities[]} />}
        </div>
      </div>
    </div>
  );
}

export default App;
