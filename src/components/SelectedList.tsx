import WeatherCard from './WeatherCard';
import { SelectedCitiesInterface } from '../types';

function SelectedList({
  selectedCities,
  units,
  handleSave,
  handleRemove,
  handleRefresh,
}: {
  selectedCities: SelectedCitiesInterface[];
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
