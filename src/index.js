import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './myStyles.scss';

const Main = () => {
  return (
    <div>
      <App />
    </div>
  );
};
ReactDOM.render(<Main />, document.getElementById('app'));
