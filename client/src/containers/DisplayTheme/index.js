import React, { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';
import DisplayInfo from '../DisplayInfo';

const DisplayTheme = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : 'gray', padding: '20px', borderRadius: '5px' }}>
      <DisplayInfo/>
    </div>
  );
};

export default DisplayTheme;
