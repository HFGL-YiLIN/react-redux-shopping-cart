import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// Import all page components here

import App from '../components/App';
import Home from '../components/Home';
import Products from '../components/Products';
import Cart from '../components/Cart';
import NoMatch from '../components/NoMatch';

// import Home from '../components/Home';
// import About from '../components/About';
// import Cart from '../components/Cart';

export default (

  //   <Router>
  //   <div>
  //     <Route exact path="/" component={App}/>
  //     <Route path="/products" component={Products}/>
  //     <Route path="/cart" component={Cart}/>
  //   </div>
  // </Router>
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/cart" component={Cart} />
      <Route component={NoMatch} />
      <Route path="*" component={Home} />
    </Switch>
</Router>
);