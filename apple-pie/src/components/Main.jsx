import React, {useState, useContext} from 'react';

import PageStatusContext from '../contexts/PageStatusContexts';

import Login from './Login.jsx';
import MainPage from './Pages/MainPage.jsx';

const Main = () => {

  // context로 분배한 전역변수
  const {loginCheck, setLoginCheck, currnetPage, setCurrentPage} = useContext(PageStatusContext);

  return (
    <div id='main'>
      <div id='main-box'>
        {loginCheck === false && (<Login/>)}
        {loginCheck === true && currnetPage == 'main' && (<MainPage/>)}
      </div>
    </div>
  );
}

export default Main;