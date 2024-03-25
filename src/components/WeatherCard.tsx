import { FaHeart } from 'react-icons/fa';

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
function WeatherCard({
  city,
  units,
  handleSave,
  handleRemove,
  handleRefresh,
}: {
  city: SelectedCities;
  units: boolean;
  handleSave: (arg0: string, arg1: string) => void;
  handleRemove: (arg0: string) => void;
  handleRefresh: (arg0: string, arg1: string) => void;
}) {
  const handleSaveCity = (city: string, region: string) => {
    handleSave(city, region);
  };
  return (
    <div className='col-12 col-md-6 col-xl-4 p-2'>
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
            Condition: <img src={city.current.condition.icon} /> {city.current.condition.text}
          </p>
          <p className='card-text'>
            Temperature: {units ? city.current.temp_f : city.current.temp_c} °{units ? 'F' : 'C'}
          </p>
          <p className='card-text'>
            Feels like: {units ? city.current.feelslike_f : city.current.feelslike_c} °{units ? 'F' : 'C'}
          </p>
          <p className='card-text'>Winds Condition: {city.current.gust_mph} mph</p>
          <p className='card-text'>Humidity: {city.current.humidity}%</p>

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

            <button className='btn btn-success' onClick={() => handleRefresh(city.location.name, city.location.region)}>
              Refresh
            </button>
            {city.saved && (
              <button className='btn btn-danger' onClick={() => handleRemove(city.location.name)}>
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
