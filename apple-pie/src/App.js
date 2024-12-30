import './App.css';

import React, { useState } from 'react';

import PageStatusContext from './contexts/PageStatusContexts.jsx';

import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';

function App() {

  /* 로그인 확인용 스테이터스 */
  const [loginCheck, setLoginCheck] = useState(false);

  /* 페이지 체크용 스테이터스 */
  const [currnetPage, setCurrentPage] = useState('main');

  return (
    <PageStatusContext.Provider value={ {loginCheck, setLoginCheck, currnetPage, setCurrentPage} }>
      <Header/>
      <Main/>
      <Footer/>
    </PageStatusContext.Provider>
  );
}

export default App;
