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
      <div className='container-fluid col-12'>
        <div className='d-flex justify-content-between col-12 col-md-3'>
          <a className='navbar-brand' href='#'>
            <img src={logo} alt='Logo' width='80' height='74' className='d-inline-block align-text-top' />
          </a>
          <h1 className='align-self-end'>WeatherNow</h1>
        </div>

        <div className='d-flex col-12 col-md-4' role='search'>
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
