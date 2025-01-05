import React, {useState, useContext, useRef} from 'react';

import PageStatusContext from '../contexts/PageStatusContexts';

import Login from './Login.jsx';
import MainPage from './Pages/MainPage.jsx';
import BoardEx from './Pages/BoardEx.jsx';

const Main = () => {

  // context로 분배한 전역변수
  const {loginCheck, setLoginCheck, currnetPage, setCurrentPage} = useContext(PageStatusContext);

  const mainBoxRef = useRef(null);

  return (
    <div id='main'>
      <div id='main-box' ref={mainBoxRef}>
        {loginCheck === false && (<Login/>)}
        {loginCheck === true && currnetPage == 'main' && (<MainPage mainBoxRef={mainBoxRef}/>)}
        {loginCheck === true && currnetPage == 'board' && (<BoardEx/>)}
      </div>
    </div>
  );
}

export default Main;