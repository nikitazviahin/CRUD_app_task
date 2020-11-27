import React, { Fragment } from 'react'; 
import './App.css';

import InputBook from './components/inputBook';
import ListBooks from './components/listBooks';

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputBook />
        <ListBooks />
      </div>
    </Fragment>
  );
}

export default App;
