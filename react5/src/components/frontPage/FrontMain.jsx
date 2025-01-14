import React, { useState, useEffect, useRef } from 'react'

import axios from 'axios';

import 'css/frontPage/frontMain.css'

const FrontMain = () => {

  const [allVisitCount, setAllvisitCount] = useState(0);
  const [weeklyVisitCountList, setWeeklyVisitCountList] = useState([]);
  const [regionList, setRegionList] = useState([]);
  const [regIdName, setRegIdName] = useState('{"regId":"11B10101","regName":"서울시"}');
  const [midTamperature, setMidTamperature] = useState([]);


  // 랜더링시 요청
  useEffect(() => {
    console.log('useEffect');
    getFrontData();
    getWeather();
  }, []);

  useEffect(() => {
    getWeather();
  }, [regIdName]);

  // 프론트 필요데이터 요청
  const getFrontData = async () => {
    try {
      const response = await axios.get('http://localhost:80/front/getFrontData');
      console.log('Success:', response.data);
      // 방문자수 관련 데이터
      setAllvisitCount(response.data.allVisitCount);
      setWeeklyVisitCountList(response.data.weeklyVisitCountList);
      // 예보지역 데이터터
      setRegionList(response.data.weartherRegionList);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }

  // 방문자 그래프 랜더링링
  const weeklyVisitCountBar = (weeklyVisitCountList) => {

    let max = 0;
    weeklyVisitCountList.forEach(element => {
      if(element.visitCount > max){
        max = element.visitCount;
      }
    });
    return weeklyVisitCountList.map((item, index) => {
      return (
        <div
          className='visitBar' 
          key={index} 
          style={{height: `${item.visitCount/max*100}%`}}
        >
          {item.visitCount}명
        </div>
      )
    })
  }

  // 일주일예보조회
  const getWeather = async () => {

    let baseTime = '202501010600';
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
        baseTime = year + '0' + month + '0' + day + hourT + '00';
      } else {
        baseTime = year + '0' + month + day + hourT + '00';
      }
    } else {
      if(day < 10){
        baseTime = year + month + '0' + day + hourT + '00';
      } else {
        baseTime = year + month + day + hourT + '00';
      }
    }

    try {
      const response = await axios.get('http://localhost:80/frontApi/weekTemperature?regId=' + JSON.parse(regIdName).regId + '&tmFc=' + baseTime);
      console.log('Success:', response.data);

      const getMidTamperature = response.data;
      setMidTamperature(getMidTamperature);

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }

  // 주간기온 랜더링
  const midTemperatureRender = (midTamperature) => {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    return (
      <>
      <tr><td>{dateMethod(new Date(year, month, day+4))}</td><td>{midTamperature.taMin4}</td><td>{midTamperature.taMax4}</td></tr>
      <tr><td>{dateMethod(new Date(year, month, day+5))}</td><td>{midTamperature.taMin5}</td><td>{midTamperature.taMax5}</td></tr>
      <tr><td>{dateMethod(new Date(year, month, day+6))}</td><td>{midTamperature.taMin6}</td><td>{midTamperature.taMax6}</td></tr>
      <tr><td>{dateMethod(new Date(year, month, day+7))}</td><td>{midTamperature.taMin7}</td><td>{midTamperature.taMax7}</td></tr>
      <tr><td>{dateMethod(new Date(year, month, day+8))}</td><td>{midTamperature.taMin8}</td><td>{midTamperature.taMax8}</td></tr>
      <tr><td>{dateMethod(new Date(year, month, day+9))}</td><td>{midTamperature.taMin9}</td><td>{midTamperature.taMax9}</td></tr>
      <tr><td>{dateMethod(new Date(year, month, day+10))}</td><td>{midTamperature.taMin10}</td><td>{midTamperature.taMax10}</td></tr>
      </>
    );
  }

  // 날자데이터를 주면 월, 일로 반환 해주는 마법의 메서드
  const dateMethod = (date) => {
    let calcTime = '';
    let month = date.getMonth() + 1;
    let day = date.getDate();
    if(month < 10){
      if(day < 10){
        calcTime = '0' + month + '월 0' + day +'일일';
      } else {
        calcTime = '0' + month + '월 ' + day + '일';
      }
    } else {
      if(day < 10){
        calcTime = month + '월 0' + day +'일';
      } else {
        calcTime = month + '월 ' + day + '일';
      }
    }

    return calcTime;
  }



  return (
    <>
    <div>FrontMain</div>
    <section className='frontMainBox'>
      <section id='frontMainImgBox'>
        
      </section>
    </section>
    <section className='frontMainBox'>
      <section>
        <div>
          <p>일별 방문자 수</p>
          <div className='visitBarBox'>
            {weeklyVisitCountBar(weeklyVisitCountList)}
          </div>
        </div>
        <div>
          <p>전체 방문자 수 : {allVisitCount}</p>
        </div>
      </section>

      <section>
        <p>주간 기온예보</p>
        <div>
          <select name="wheatherRegion" id="wheatherRegion" onChange={(e) => setRegIdName(e.target.value)}>
            <option value="11B10101">서울</option>
            {regionList.map((item, index) => {
              return (
                <option key={index} value={JSON.stringify({ regId: item.regId, regName: item.regName })}>
                  {item.regName}
                </option>
              )
            })}
          </select>
        </div>
        <div>
          <table>
            {midTemperatureRender(midTamperature)}
          </table>
        </div>
      </section>
    </section>
    </>
  )
}

export default FrontMain