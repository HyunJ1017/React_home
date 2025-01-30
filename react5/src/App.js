import React, { useState } from 'react';

import './App.css';
import './css/main/main.css';

import Main from 'components/main/Main.jsx'

import PageStateContext from 'contexts/PageStateContext.jsx';


function App() {

  const [currentPage, setCurrentPage] = useState('FrontPage');

  return (
    <PageStateContext.Provider value={{
      currentPage, setCurrentPage
      }} >
      <Main />
    </PageStateContext.Provider>
  );
}

export default App;
