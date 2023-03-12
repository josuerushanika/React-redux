// eslint-disable-next-line

import React from 'react';
import { Provider } from 'react';
import './App.css';
import CakeContainer from './components/CakeContainer';

function App() {
  return (
    <Provider>
    <div className="App">
      <CakeContainer />
    </div>
    <Provider/>
  );
}

export default App;
