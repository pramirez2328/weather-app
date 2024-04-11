import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { SelectedCitiesInterface } from '../types';

function WeatherCard({
  city,
  units,
  handleSave,
  handleRemove,
  handleRefresh,
}: {
  city: SelectedCitiesInterface;
  units: boolean;
  handleSave: (arg0: string, arg1: string) => void;
  handleRemove: (arg0: string) => void;
  handleRefresh: (arg0: string, arg1: string) => void;
}) {
  const [visible, setVisible] = useState(false);
  const handleSaveCity = (city: string, region: string) => {
    handleSave(city, region);
  };

  return (
    <div className='col-12 col-md-6 col-xl-4 p-2'>
      <button className='btn btn-primary w-100 mb-2' onClick={() => setVisible(!visible)}>
        {city.location.name} ({units ? city.current.temp_f : city.current.temp_c} °{units ? 'F' : 'C'})
      </button>
      {visible && (
        <div>
          <div className='card'>
            <div className='card-body'>
              <div className=''>
                <h4 className='card-title text-uppercase p-2 border rounded' id='card-title'>
                  {city.location.name}
                </h4>
              </div>
              <p className='card-text'>Region: {city.location.region}</p>
              <p className='card-text'>Country: {city.location.country}</p>

              <p className='card-text'>
                Temperature: {units ? city.current.temp_f : city.current.temp_c} °{units ? 'F' : 'C'}
              </p>
              <p className='card-text'>
                Feels like: {units ? city.current.feelslike_f : city.current.feelslike_c} °{units ? 'F' : 'C'}
              </p>
              <p className='card-text'>Winds Condition: {city.current.wind_mph} mph</p>
              <p className='card-text'>Wind gust: {city.current.gust_mph} mph</p>
              <p className='card-text'>Humidity: {city.current.humidity}%</p>
              <p className='card-text'>
                Condition: <img src={city.current.condition.icon} /> {city.current.condition.text}
              </p>

              <div className='d-flex justify-content-between'>
                {!city.saved && (
                  <button
                    className='btn btn-info d-flex'
                    onClick={() => handleSaveCity(city.location.name, city.location.region)}
                  >
                    <p className='m-0 me-2'>Saved it!</p>
                    <FaHeart />
                  </button>
                )}
                <div>
                  {city.refresh ? (
                    <div className='spinner-border text-info ms-3' role='status' />
                  ) : (
                    <button
                      className='btn btn-success'
                      onClick={() => handleRefresh(city.location.name, city.location.region)}
                    >
                      Refresh
                    </button>
                  )}
                </div>

                {city.saved && (
                  <button className='btn btn-danger' onClick={() => handleRemove(city.location.name)}>
                    Delete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherCard;
