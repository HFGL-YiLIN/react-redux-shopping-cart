import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import Products from '../components/Products';
import Cart from '../components/Cart';
import NoMatch from '../components/NoMatch';

export default (

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