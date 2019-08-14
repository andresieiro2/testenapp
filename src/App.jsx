import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { history } from './store/Redux';

import Views from './views';

const App = () => {
  return (
    <ConnectedRouter key="router" history={history}>
      <Switch>
        <Route
          key="products"
          name="users"
          exact
          path="/"
          component={Views.Products}
        />
        <Route
          key="carrinho"
          name="carrinho"
          exact
          path="/carrinho"
          component={Views.Cart}
        />
        <Route
          key="CartEdit"
          name="CartEdit"
          exact
          path="/carrinho/edit"
          component={Views.CartEdit}
        />
      </Switch>
    </ConnectedRouter>
  );
};

export default App;
