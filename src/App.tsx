import './App.css';
import React from 'react';
import {Provider} from 'react-redux';

import store from './reducers/store';
import { ExchangeRateFeature } from './features/exchange-rate/exchange-rate';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
          <ExchangeRateFeature />
      </div>
    </Provider>
  );
}

export default App;
