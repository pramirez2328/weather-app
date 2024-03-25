import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import SearchList from './components/SearchList';
import SelectedList from './components/SelectedList';
import Units from './components/Units';
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
    temp_c: number;
    feelslike_c: number;
    temp_f: number;
    feelslike_f: number;
    gust_mph: number;
    humidity: number;
    last_updated_epoch: number;
  };
  saved?: boolean;
}

function App() {
  const [cities, setCities] = useState(null);
  const [selectedCities, setSelectedCities] = useState<SelectedCities[]>([]);
  const [units, setUnits] = useState(true);

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

  const handleOnChangeUnits = (condition: boolean) => {
    setUnits(condition);
  };

  const handleSave = (city: string, region: string) => {
    //save city in local storage
    if (!localStorage.getItem(city)) {
      // Save city in local storage
      const data = `${city},${region}`;
      localStorage.setItem(city, JSON.stringify(data));
    }
    const findCity = selectedCities.find((selectedCity) => selectedCity.location.name === city);
    if (findCity) {
      findCity.saved = true;
      setSelectedCities([...selectedCities]);
    }
  };

  const handleRemove = (city: string) => {
    //remove city from local storage
    localStorage.removeItem(city);
    const arrWithoutCity = selectedCities.filter((selectedCity) => selectedCity.location.name !== city);
    setSelectedCities(arrWithoutCity);
  };

  const handleRefresh = async (city: string, region: string) => {
    const data = await fetchCityData(city, region);

    if (Object.keys(data).length !== 0) {
      setSelectedCities((prevCities) => {
        const cleanCities = prevCities.filter((prevCity) => prevCity.location.name !== data.location.name);
        data.saved = true;
        return [...cleanCities, data];
      });
    }
  };

  useEffect(() => {
    if (localStorage.length) {
      Object.values(localStorage).forEach(async (currentCity) => {
        const [city, region] = currentCity.replace(/"/g, '').split(',');

        const data = await fetchCityData(city, region);

        if (Object.keys(data).length !== 0) {
          setSelectedCities((prevCities) => {
            const cleanCities = prevCities.filter((prevCity) => prevCity.location.name !== data.location.name);
            data.saved = true;
            return [...cleanCities, data];
          });
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Nav handleSearch={handleSearch} />

      <div className='container'>
        <div className='d-flex justify-content-end me-2'>
          <Units changeUnits={handleOnChangeUnits} />
        </div>
        {cities && (
          <>
            <h6 className='mb-4 text-muted'>Choose the city:</h6>
            <SearchList cities={cities} handleSearchCity={handleSearchCity} />
          </>
        )}
        <div className='d-flex flex-wrap col-12'>
          {selectedCities.length > 0 && (
            <SelectedList
              selectedCities={selectedCities}
              units={units}
              handleSave={handleSave}
              handleRemove={handleRemove}
              handleRefresh={handleRefresh}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
