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

function WeatherCard({ selectedCities }: { selectedCities: SelectedCities[] }) {
  return selectedCities.map((city) => {
    return (
      <div className='col-12 col-md-6 col-xl-4 p-2' key={city.current.last_updated_epoch}>
        <div className='card'>
          <div className='card-body'>
            <div className=''>
              <h4 className='card-title text-uppercase text-bg-info p-2 border rounded'>{city.location.name}</h4>
            </div>
            <p className='card-text'>Region: {city.location.region}</p>
            <p className='card-text'>Country: {city.location.country}</p>
            <p className='card-text'>
              Condition: <img src={city.current.condition.icon} /> {city.current.condition.text}
            </p>
            <p className='card-text'>Temperature: {city.current.temp_f} °F</p>
            <p className='card-text'>Feels like: {city.current.feelslike_f} °F</p>
            <p className='card-text'>Winds Condition: {city.current.gust_mph} mph</p>
            <p className='card-text'>Humidity: {city.current.humidity}%</p>
            <button className='btn btn-primary w-100'>Save</button>
          </div>
        </div>
      </div>
    );
  });
}

export default WeatherCard;
