import React, { useState, useContext, useEffect, useRef } from 'react';
import PageStatusContext from '../../contexts/PageStatusContexts.jsx';

const MainPage = (props) => {

  const { loginCheck, setLoginCheck, currnetPage, setCurrentPage } = useContext(PageStatusContext);
  const mainBoxRef = props.mainBoxRef;
  const [mainPageTimer, setMainPageTimer] = useState(false);
  
  useEffect(() => {
    // 메인박스 늘리기, transition: all 3s ease-in-out;
    mainBoxRef.current.style.minWidth = '80vw';
  }, []);
  
  // 로그인메세지 출력 후 메인화면 전환, 3s
  setTimeout(() => {
    setMainPageTimer(true);
    mainBoxRef.current.style.alignItems = 'flex-start';
  }, 3000);
  

  return (
    <div id='main-page'>

      { mainPageTimer === false && (
        <div id='wellcomeMessage'>Well Come!!</div>
      ) }

      { mainPageTimer === true && (
        <>
          <section>
            <h1>Hello World</h1>
          </section>
          <section>
            <section>1 일일현황<br /> <br /> </section>
            <section>2 주간통계</section>
          </section>
          <section>
            <section>1 동내날씨<br /><br /><br /><br /></section>
            <section>2 예보</section>
            <section>3 미세먼지</section>
            <section>4 이미지</section>
          </section>
        </>
      )}


    </div>
  )
}

export default MainPage;