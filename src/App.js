import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import ThemeToggle from './components/theme-toggle';
import DisplayTheme from './containers/DisplayTheme';
import { ThemeProvider } from './context/themeContext';
const App = () => {
  return (
    <ThemeProvider>

      <Provider store={store}>
        <div className="App">
          <ThemeToggle/>
          <DisplayTheme/>
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
