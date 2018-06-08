import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import App from './containers/App'
import Reviews from './containers/Reviews'


ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/reviews" component={Reviews} />
    </div>
   </BrowserRouter>,
  document.getElementById('app')
);
