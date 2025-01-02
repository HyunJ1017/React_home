import React, {useState, useContext, useRef} from 'react';

import PageStatusContext from '../contexts/PageStatusContexts';

import Login from './Login.jsx';
import MainPage from './Pages/MainPage.jsx';

const Main = () => {

  // context로 분배한 전역변수
  const {loginCheck, setLoginCheck, currnetPage, setCurrentPage} = useContext(PageStatusContext);

  const mainBoxRef = useRef(null);

  return (
    <div id='main'>
      <div id='main-box' ref={mainBoxRef}>
        {loginCheck === false && (<Login/>)}
        {loginCheck === true && currnetPage == 'main' && (<MainPage mainBoxRef={mainBoxRef}/>)}
      </div>
    </div>
  );
}

export default Main;