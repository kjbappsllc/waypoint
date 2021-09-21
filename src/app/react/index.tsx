import 'tailwindcss/tailwind.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Application } from '../application';

export const createReactUI = (): Application => ({
  start: () => {
    ReactDOM.render(<div> This is a new react app</div>, document.getElementById('root'));
  }
})
