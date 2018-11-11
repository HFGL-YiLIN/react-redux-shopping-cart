/* eslint react/jsx-max-props-per-line: 0 */
/* eslint react/jsx-sort-props: 0 */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import clientRoute from '../routes/clientRoute';



const App = () => {
  return (
    <div className="App">
      {/* <Cart />
    <Products /> */}
    {/* <div id='home'>
    <h1>11111</h1>
    </div> */}
      {clientRoute}
     
    </div>
  );
};

export default App;
