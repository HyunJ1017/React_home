import React, { useState, useContext, useEffect, useRef } from 'react';
import PageStatusContext from '../../contexts/PageStatusContexts.jsx';

import axios from 'axios';
import WthrBox2Area from '../Pages/WthrBox2Area.jsx';
import WthrBox3Dust from '../Pages/WthrBox3Dust.jsx';

const MainPage = (props) => {

  const { loginCheck, setLoginCheck, currnetPage, setCurrentPage } = useContext(PageStatusContext);
  const mainBoxRef = props.mainBoxRef;
  const wthrTextRef = useRef(null);
  const wthrMapRef = useRef(null);
  const [mainPageTimer, setMainPageTimer] = useState(false);
  
  useEffect(() => {
    // 메인박스 늘리기, transition: all 3s ease-in-out;
    mainBoxRef.current.style.minWidth = '80vw';

    // 날시불러오기
    setTimeout(() => {
      methodAxios();
    }, 3000)

  }, []);

  // 날시불러오기
  const methodAxios = () => {
    let tmFc = '';
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let hourT = '18';
    if(hour < 7 || (hour === 6 && minute < 15)){
      date = new Date(year, month, day - 1);
      hourT = '18';
    } else if(hour < 19 || (hour === 18 && minute < 15)){
      hourT = '06';
    }
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    if(month < 10){
      if(day < 10){
        tmFc = year + '0' + month + '0' + day + hourT + '00';
      } else {
        tmFc = year + '0' + month + day + hourT + '00';
      }
    } else {
      if(day < 10){
        tmFc = year + month + '0' + day + hourT + '00';
      } else {
        tmFc = year + month + day + hourT + '00';
      }
    }
    axios.get("http://192.168.219.100:80/getWthr/tomorrow?stnId=108&tmFc=" + tmFc)
    .then(response => {
      console.log(response.data);
      console.log(wthrTextRef.current);

      wthrTextRef.current.innerText = response.data;
      
    })
    .catch(err => console.log(err));
  }

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
          <section id='wthrBox'>
            <section id='wthrBox1'><img src="https://cdn.pixabay.com/photo/2020/06/08/14/17/sky-5274530_1280.jpg" alt="인터넷이미지" /></section>
            <WthrBox2Area/>
            <WthrBox3Dust/>
            <section><span>4 날씨예보</span><span ref={wthrTextRef} style={{ whiteSpace: 'pre-wrap' }}></span></section>
          </section>
        </>
      )}


    </div>
  )
}

export default MainPage;