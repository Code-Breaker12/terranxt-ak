import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';
const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Toggle Theme ({theme === 'light' ? 'Dark' : 'Light'})
    </button>
  );
};

export default ThemeToggle;
