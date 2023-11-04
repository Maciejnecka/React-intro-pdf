'use strict';
import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

// const myStyles = {
//   border: '1px solid blue',
//   backgroundColor: 'yellow',
// };

// root.render(
//   <h1 className="myClass" style={myStyles}>
//     Hello World
//   </h1>
// );

const output = (
  <section>
    <img src="https://www.google.pl/favicon.ico" />
    <input />
  </section>
);

root.render(output);
