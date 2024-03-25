import WeatherCard from './WeatherCard';
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

function SelectedList({
  selectedCities,
  units,
  handleSave,
  handleRemove,
  handleRefresh,
}: {
  selectedCities: SelectedCities[];
  units: boolean;
  handleSave: (arg0: string, arg1: string) => void;
  handleRemove: (arg0: string) => void;
  handleRefresh: (arg0: string, arg1: string) => void;
}) {
  return selectedCities.map((city) => {
    return (
      <WeatherCard
        key={`${city.location.name}${city.location.region}${city.location.country}`}
        city={city}
        units={units}
        handleSave={handleSave}
        handleRemove={handleRemove}
        handleRefresh={handleRefresh}
      />
    );
  });
}

export default SelectedList;
