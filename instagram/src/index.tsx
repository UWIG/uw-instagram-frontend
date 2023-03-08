import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import FirebaseContext from './context/firebase';
// import { firebase, FieldValue } from './lib/firebase';
import './styles/app.css';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <App />
// );

ReactDOM.render(
  // <FirebaseContext.Provider value={{ firebase, FieldValue }}>
  //   <App />
  // </FirebaseContext.Provider>,
  <App />, document.getElementById('root')
);

// client side rendered app: react (cra)
// -> database wihch is Firebase
// -> react-loading-skeleton
// tailwind

// architecture
// src
// -> components,
// -> constants,
// -> context,
// -> helpers,
// -> hooks,
// -> pages,
// -> lib (firebase is going to live in here),
// -> services (firebase functions in here),
// -> styles (tailwind's folder (app/tailwind))
