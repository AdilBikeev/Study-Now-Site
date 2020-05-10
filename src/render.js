import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

export let RenderUpdate = (store) => {
    ReactDOM.render(
      <React.StrictMode>
        <App state={store._state} dispatch={store.dispatch.bind(store)}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
};