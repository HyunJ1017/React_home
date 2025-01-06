import React, {useState, useContext, useRef} from 'react';

import PageStatusContext from '../contexts/PageStatusContexts';

import Login from './Login.jsx';
import MainPage from './Pages/MainPage.jsx';
import BoardManager from './Pages/BoardManager.jsx';

const Main = () => {

  // context로 분배한 전역변수
  const {loginCheck, setLoginCheck, currnetPage, setCurrentPage} = useContext(PageStatusContext);

  const mainBoxRef = useRef(null);
  const [mainPageTimer, setMainPageTimer] = useState(false);
  const loginInputRef = useRef(null);

  return (
    <div id='main' onClick={() => {if(loginCheck === false)loginInputRef.current.focus();}}>
      <div id='main-box' ref={mainBoxRef}>
        {loginCheck === false && (<Login loginInputRef={loginInputRef}/>)}
        {loginCheck === true && currnetPage == 'main' && (<MainPage mainBoxRef={mainBoxRef} mainPageTimer={mainPageTimer} setMainPageTimer={setMainPageTimer}/>)}
        {loginCheck === true && currnetPage == 'boardList' && (<BoardManager/>)}
      </div>
    </div>
  );
}

export default Main;