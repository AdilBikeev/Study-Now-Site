import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

export let RenderUpdate = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <App state={state.App}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
};