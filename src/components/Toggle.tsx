import React from 'react';
import { ToggleWrapper, ThemeWrapper } from '../styles/ToggleStyle';
import { useTheme } from 'styled-components';

type ToggleProps = {
  handleChange: () => void;
  isChecked: boolean;
};

const Toggle: React.FC<ToggleProps> = ({ handleChange, isChecked }) => {
  const theme = useTheme();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleChange();
    }
  };

  return (
    <ThemeWrapper>
      <div>
        <img
          src={theme.sunIcon}
          alt="Sun Icon"
         
          style={{ cursor: 'pointer' }}
          onClick={handleChange}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              handleChange();
            }
          }}
        />
      </div>

      <ToggleWrapper>
        <label
          className="switch theme-button"
          tabIndex={0}
          onChange={handleChange}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              handleChange();
            }
          }}
        >
          <input
            type="checkbox"
            id="checkbox"
            onChange={handleChange}
            checked={isChecked}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          />
          <div className="slider round"></div>
        </label>
      </ToggleWrapper>

      <div>
        <img
          src={theme.moonIcon}
          alt="Moon Icon"
       
          style={{ cursor: 'pointer' }}
          onClick={handleChange}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              handleChange();
            }
          }}
        />
      </div>
    </ThemeWrapper>
  );
};

export default Toggle;
