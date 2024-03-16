import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import DisplayInfo from './containers/DisplayInfo';
// import Counter from './Counter';

const App = ()=> {
  return (
    <Provider store={store}>
      <div className="App">
        <DisplayInfo/>
        {/* <Counter /> */}
      </div>
    </Provider>
  );
}

export default App;
