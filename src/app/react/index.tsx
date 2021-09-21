import 'tailwindcss/tailwind.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Application } from '../application';

export const ReactAppAdapter: Application = {
  start: () => {
    ReactDOM.render(<div> This is a new react app</div>, document.getElementById('root'));
  }
}
