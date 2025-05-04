import React, { useState } from 'react';

import './App.css';
import './css/main/main.css';

import Main from 'components/main/Main.jsx'

import PageStateContext from 'contexts/PageStateContext.jsx';


function App() {

  const [currentPage, setCurrentPage] = useState('FrontPage');
  const [allVisitCount, setAllvisitCount] = useState(0);
  const [weeklyVisitCount, setWeeklyVisitCount] = useState(0);

  return (
    <PageStateContext.Provider value={{
      currentPage, setCurrentPage, allVisitCount, setAllvisitCount, weeklyVisitCount, setWeeklyVisitCount
      }} >
      <Main />
    </PageStateContext.Provider>
  );
}

export default App;
