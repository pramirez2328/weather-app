export interface SelectedCitiesInterface {
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
  refresh?: boolean;
}

export interface CityInterface {
  name: string;
  region: string;
  country: string;
  id: number;
  lat: number;
  lon: number;
  url: string;
}
