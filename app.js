'use strict';
const root = ReactDOM.createRoot(document.getElementById('root'));

const element = React.createElement('h1', null, 'Hello world');

root.render(element);

// ReactDOM.render(
//   React.createElement('h1', null, 'Hello World'),
//   document.querySelector('#root')
// );

// Uwaga: jeśli chcesz przetestować to rozwiązanie
// w pliku index.html zmien wersje
// react@17 i react-dom@17 na 18
