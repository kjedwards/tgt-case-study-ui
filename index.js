import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import App from './containers/App'
import Reviews from './containers/Reviews'

import Store from './store'

const store = Store()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/reviews" component={Reviews} />
      </div>
     </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
