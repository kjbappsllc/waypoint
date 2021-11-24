import 'tailwindcss/tailwind.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Text } from './shared/text/text.component'
import { Application } from '../application';

export const createReactUI = (): Application => ({
  start: () => {
    ReactDOM.render(<div><Text text='This is a new react app'></Text></div>, document.getElementById('root'));
  }
})
