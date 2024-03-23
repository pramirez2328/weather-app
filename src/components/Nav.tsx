import { useState } from 'react';
import logo from '../assets/logo.webp';

const Nav = ({ handleSearch }: { handleSearch: (arg0: string) => void }) => {
  const [search, setSearch] = useState('');

  const handleSearchButton = () => {
    handleSearch(search);
    setSearch('');
  };

  return (
    <nav className='navbar bg-body-tertiary px-4 mb-4'>
      <div className='container-fluid'>
        <div className='d-flex align-items-center'>
          <a className='navbar-brand' href='#'>
            <img src={logo} alt='Logo' width='80' height='74' className='d-inline-block align-text-top' />
          </a>
          <h1>WeatherNow</h1>
        </div>

        <div className='d-flex' role='search'>
          <input
            className='form-control me-2'
            type='search'
            placeholder='Search'
            aria-label='Search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className='btn btn-outline-success' type='submit' onClick={handleSearchButton}>
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
