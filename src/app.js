// 'use strict';
// import React from 'react';
// import H1 from './components/H1';
// // import { createRoot } from 'react-dom/client';
// // import { render } from 'react-dom';

// const root = createRoot(document.querySelector('#root'));

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

// const userInfo = (
//   <Fragment>
//     <h1>Jan Programista</h1>
//     <p>Opis dokonań Jana programisty</p>
//   </Fragment>
// );

// const userSkills = (
//   <ul>
//     <li>HTML</li>
//     <li>CSS</li>
//     <li>JS</li>
//   </ul>
// );

// root.render(
//   <section>
//     {userInfo} {userSkills}
//   </section>
// );

// root.render(
//   <div>
//     <h1 className="title">Title</h1>
//   </div>
// );

// root.render(
//   React.createElement(
//     'div',
//     null,
//     React.createElement('h1', { className: 'title' }, 'Tytuł')
//   )
// );

// const h1 = {
//   type: 'h1',
//   props: {
//     clasName: 'title',
//     children: 'Tytuł',
//   },
// };

// const div = {
//   type: 'div',
//   props: {
//     children: h1,
//   },
// };

// const App = () => {
//   return (
//     <div>
//       <h1 className="title">Tytuł</h1>
//     </div>
//   );
// };

// root.render(<App />);

// const H1 = () => <h1 className="title">Tytuł</h1>;

// const App = () => {
//   return (
//     <div>
//       <H1 />
//     </div>
//   );
// };

// root.render(<App />);

// class H1 extends React.Component {
//   render() {
//     return <h1 className="title">Tytuł</h1>;
//   }
// }
// const App = () => {
//   return (
//     <div>
//       <H1 />
//     </div>
//   );
// };

// root.render(<App />);

// const App = () => (
//   <div>
//     <H1 />
//   </div>
// );

// export default App;

// const Header = (props) => {
//   return <header>{props.text}</header>;
// };

// const App = () => (
//   <>
//     <Header text="nagłówek" />
//     <Header text="tytuł" />
//   </>
// );

// root.render(<App />);

// class Header extends React.Component {
//   render() {
//     return <header>{this.props.text}</header>;
//   }
// }
// const App = () => <Header text="nagłówek" />;

// root.render(<App />);

// class Header extends React.Component {
//   render() {
//     const { text } = this.props;
//     return <header>{text}</header>;
//   }
// }

// const App = () => <Header text="nagłówek" />;

// root.render(<App />);

// class Product extends React.Component {
//   render() {
//     const { name, price } = this.props.item;
//     return (
//       <ul>
//         <li>Name: {name}</li>
//         <li>Price: {price}</li>
//       </ul>
//     );
//   }
// }

// const pen = { name: 'Super długopis', price: 99 };
// const App = () => <Product item={pen} />;
// root.render(<App />);

import React from 'react';
import { createRoot } from 'react-dom/client';
import Product from './components/Product';

const root = createRoot(document.querySelector('#root'));

const App = () => <Product name="Komputer" />;
root.render(<App />);
