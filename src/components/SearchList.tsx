interface City {
  name: string;
  region: string;
  country: string;
  id: number;
  lat: number;
  lon: number;
  url: string;
}
function SearchList({
  cities,
  handleSearchCity,
}: {
  cities: City[];
  handleSearchCity: (arg0: string, arg1: string) => void;
}) {
  return (
    <div className='border border-danger rounded p-4'>
      <table className='table table-hover '>
        <thead>
          <tr>
            <th scope='col'></th>
            <th scope='col'>City</th>
            <th scope='col'>Region</th>
            <th scope='col'>Country</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {cities.map((city) => (
            <tr key={city.id}>
              <th scope='row'></th>
              <td>{city.name}</td>
              <td>{city.region}</td>
              <td>{city.country}</td>
              <td>
                <button className='btn btn-primary' onClick={() => handleSearchCity(city.name, city.region)}>
                  Choose
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchList;
