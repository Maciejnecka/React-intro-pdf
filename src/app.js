'use strict';
import React, { Fragment } from 'react';
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

// const output = (
//   <section>
//     <img src="https://www.google.pl/favicon.ico" />
//     <input />
//   </section>
// );

// root.render(output);

// const myStyles = {
//   border: '1px solid blue',
//   backgroundColor: 'yellow',
// };

// const text = 'Hello World';

// root.render(
//   <h1 className={'Hello World'} style={myStyles}>
//     {text}
//   </h1>
// );

// const getText = () => 'Hello World';

// root.render(
//   <h1>
//     {getText()}
//     {2 + 2}
//   </h1>
// );

// const getText = (str) => {
//   return <h1>{str}</h1>;
// };

// const text = <em>Hello World {2 + 2}</em>;
// root.render(<section>{getText(text)}</section>);

const userInfo = (
  <Fragment>
    <h1>Jan Programista</h1>
    <p>Opis dokonań Jana programisty</p>
  </Fragment>
);

const userSkills = (
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JS</li>
  </ul>
);

root.render(
  <section>
    {userInfo} {userSkills}
  </section>
);
