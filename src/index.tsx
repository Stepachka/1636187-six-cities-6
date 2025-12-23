import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';

import { Provider } from 'react-redux';

import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={offers} reviews={reviews}/>
    </Provider>
  </React.StrictMode>
);
