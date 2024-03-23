import { useState } from 'react';

function Units({ changeUnits }: { changeUnits: (arg0: boolean) => void }) {
  const [units, setUnits] = useState(true);
  const handleOnChange = () => {
    setUnits(!units);
    changeUnits(!units);
  };

  return (
    <>
      <div className='form-check form-switch'>
        <label className='form-check-label' htmlFor='flexSwitchCheckChecked'>
          Change to {units ? 'Celsius' : 'Fahrenheit'}
        </label>
        <input
          className='form-check-input'
          type='checkbox'
          role='switch'
          id='flexSwitchCheckChecked'
          defaultChecked={units}
          onClick={handleOnChange}
        />
      </div>
    </>
  );
}

export default Units;
