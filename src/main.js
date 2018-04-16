const App = require('./components/App');
const ReactDOM = require('react-dom');
const React = require('react');

const main = () => {
  ReactDOM.render(<App />, document.querySelector('.container'));
};

window.onload = main;
