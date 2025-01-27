import React, { useState, useEffect, useRef } from 'react'

import axios from 'axios';

import Front_Img from 'images/front_Img1.png';

import 'css/frontPage/frontMain.css'

const RegNameRender = (props) => {
  const { regIdName, regionList, weatherRegionSecter } = props;

  const sidoName = regIdName.sidoName;
  return (
    <>
      {regionList.map((item, index) => 
        sidoName === item.regName ? (
          <option key={index} value={item.regId}>{item.regName}</option>
        ) : null
      )}
      {weatherRegionSecter.includes('B') ? (
          <option value="11B10101">서울</option>
        ) : null
      }
      {regionList.map((item, index) => 
        weatherRegionSecter.includes(item.regId[2]) ? (
          <option key={index} value={item.regId}>{item.regName}</option>
        ) : null
      )}
    </>
  );
};


const FrontMain = () => {

  const [allVisitCount, setAllvisitCount] = useState(0);
  const [weeklyVisitCountList, setWeeklyVisitCountList] = useState([]);
  const [weeklyVisitCount, setWeeklyVisitCount] = useState(0);
  const [weatherRegionSecter, setWeatherRegionSecter] = useState(["A", "B"]);
  const [regionList, setRegionList] = useState([]);
  const [regIdName, setRegIdName] = useState({"regId":"11B10101","sidoName":"전국"});
  const [midTamperature, setMidTamperature] = useState([]);
  const [dustList, setDustList] = useState([]);

  const sidoNameList = ['전국', '서울', '부산', '대구', '인천', '광주', '대전', '울산', '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주', '세종'];

  const weatherRegionSecterRef = useRef(null);
  const regNameRef = useRef(null);
  const sidoNameRef = useRef(null);

  let regIdNameFl = true;


  // 랜더링시 요청
  useEffect(() => {
    console.log('useEffect');
    getFrontData();
    getWeather();
  }, []);


  // 지역변경시 메서드흐름
  // regIdNameFl 변경
  // getWeather 호출
  // regIdNameFl 변경
  useEffect(() => {
    if(regIdNameFl) {
      regIdNameFl = false;
      // 지역리스트에서 regId와 regName 찾기
      const search = regIdName.sidoName;
      regionList.forEach(element => {
        if(element.regName === search){

          switch(element.regId[2]){
            case 'A', 'B' : 
              weatherRegionSecterRef.current.value='["A","B"]'; 
              break;
            case 'D' : 
              weatherRegionSecterRef.current.value='["D"]'; 
              break;
            case 'C' : 
              weatherRegionSecterRef.current.value='["C"]'; 
              break;
            case 'F' : 
              weatherRegionSecterRef.current.value='["F"]'; 
              break;
            case 'E', 'H' : 
              weatherRegionSecterRef.current.value='["E","H"]'; 
              break;
            case 'G' : 
              weatherRegionSecterRef.current.value='["G"]'; 
              break;
          }

          setWeatherRegionSecter(weatherRegionSecterRef.current.value);
          setRegIdName((prev) => ({ ...prev, regId : element.regId}));
          setTimeout(() => {
            regNameRef.current.value = element.regId;
            setRegIdName((prev) => ({ ...prev, regId : element.regId}));
          }, 100);

          return;
        }
      })
      getWeather();
    }
  }, [regIdName.sidoName]);

  useEffect(() => {

    if(regIdNameFl) {
      regIdNameFl = false;
      if(sidoNameList.includes(regNameRef.current.value)){
        setRegIdName( (prev) => ({ ...prev, sidoName : regNameRef.current.value}) )
      }
      getWeather();
    }
  }, [regIdName.regId]);

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

      // 주간 방문자수 합계
      let sum = 0;
      response.data.weeklyVisitCountList.forEach(element => {
        sum += element.visitCount*1;
      });
      setWeeklyVisitCount(sum);

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }

  // 방문자 그래프 랜더링링
  const weeklyVisitCountBar = (weeklyVisitCountList) => {

    let max = 0;
    weeklyVisitCountList.forEach(element => {
      if(element.visitCount - max > 0){
        max = element.visitCount;
      }
    });

    return weeklyVisitCountList.map((item, index) => {
      return (
        <div
          className='visitBar'
          key={index}
          style={{height: `${(item.visitCount/max)*100}%`}}
        >
          {item.visitCount}
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
      const response = await axios.get('http://localhost:80/frontApi/getWeather?regId=' + regIdName.regId + '&sidoName=' + regIdName.sidoName + '&tmFc=' + baseTime);

      const getMidTamperature = response.data.weekTemperature;
      const getDustData = response.data.dust;
      setMidTamperature(getMidTamperature);
      setDustList(getDustData);
      regIdNameFl = true;

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }

  

  // 예보지방 선택
  useEffect(() => {
    const filteredRegions = regionList.filter((item) =>
      weatherRegionSecter.includes(item.regId[2])
    );
  
    if(weatherRegionSecter.includes('B')){
      setRegIdName( (prev) => ({ ...prev, regId : '11B10101' }) );
    } else if (filteredRegions.length > 0) {
      setRegIdName( (prev) => ({ ...prev, regId : filteredRegions[0].regId }) );
    } else {
      setRegIdName(null); // 선택 가능한 값이 없으면 초기화
    }
  }, [weatherRegionSecter]);

  // 주간기온 랜더링
  const midTemperatureRender = (midTamperature) => {

    if(!midTamperature){
      return null;
    }

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

  // 미세먼지 랜더링
  const dustRender = () => {

    if(dustList === null){
      return (
        <>
        <tr><td>미세먼지</td><td>초미세먼지</td></tr>
        <tr><td>정보 없음</td><td>정보 없음</td></tr>
        <tr><td>정보 없음</td><td>정보 없음</td></tr>
        <tr><td>정보 없음</td><td>정보 없음</td></tr>
        </> 
      )
    }

    return (
      <>
      <tr><td>미세먼지</td><td>초미세먼지</td></tr>
      <tr><td style={{filter : 'brightness(3)'}}>{dustList.pm10Grade}</td><td style={{filter : 'brightness(3)'}}>{dustList.pm25Grade}</td></tr>
      <tr><td>{dustList.pm10GradeText}</td><td>{dustList.pm25GradeText}</td></tr>
      <tr><td>{dustList.pm10Value}</td><td>{dustList.pm25Value}</td></tr>
      </>
    );
  }



  return (
    <>
    <section className='frontMainBox' style={{position: 'relative'}}>
      <section id='frontMainImgBox'>
        <img src={Front_Img} alt="" />
      </section>
      <section id='frontMainTextBox'>
        <div className='btnDiv'>Profile</div>
        <div className='btnDiv'>Career</div>
        <div className='btnDiv'>Project</div>
        <div className='btnDiv'></div>
        <div className='btnDiv'></div>
        <div className='btnDiv'></div>
      </section>
    </section>
    <section className='frontMainBox'>
      

      {/* 하단좌측측영역 */}
      <section id='visitBox'>
        <section>
          <div>
            <p>일별 방문자 수(명)</p>
            <div className='visitBarBox'>
              {weeklyVisitCountBar(weeklyVisitCountList)}
            </div>
          </div>
          <div>
            <p>주간 방무자 수 : {weeklyVisitCount}</p>
            <p>전체 방문자 수 : {allVisitCount}</p>
          </div>
        </section>
      </section>

      {/* 하단중앙앙영역 */}
      <section>

      </section>

      {/* 하단우측영역 */}
      <section id='weatherBox'>

        <section>
          <p>오늘은 전 부치는날...</p>
          <p>주간 기온예보</p>
          <div>
            <select
              name="weatherRegion-secter"
              ref={weatherRegionSecterRef}
              onChange={(e) => {
                console.log("weatherRegionSecter/onChange() regIdNameFl : ", regIdNameFl);
                if(regIdNameFl){
                  console.log("weatherRegionSecter/onChange()");
                  setWeatherRegionSecter(JSON.parse(e.target.value));
                }
              }}
            >
              <option value='["A","B"]'>서울, 경기, 인천</option>
              <option value='["D"]'>강원도</option>
              <option value='["C"]'>충청도</option>
              <option value='["F"]'>전라도</option>
              <option value='["E","H"]'>경상도</option>
              <option value='["G"]'>제주도</option>
            </select>
          </div>
          <div>
            <select
              name="wheatherRegion"
              id="wheatherRegion"
              ref={regNameRef}
              onChange={(e) => {
                console.log("wheatherRegion/onChange() regIdNameFl : ", regIdNameFl);
                  if(regIdNameFl){
                    console.log("wheatherRegion/onChange()");
                    setRegIdName((prev) => ({ ...prev, regId : e.target.value}));
                  }
                }
              }
            >
              {<RegNameRender regIdName={regIdName} regionList={regionList} weatherRegionSecter={weatherRegionSecter}/>}
            </select>
          </div>
          <div>
            <p>측정도시 : {
                regionList.find(e => e.regId === regIdName?.regId)?.regName || "선택 안됨"
              }
            </p>
          </div>
          <table border={1} id='midTemperatureTable'>
            {midTemperatureRender(midTamperature)}
          </table>
        </section>

        <section>
          <p>미세먼지</p>
          <div>
            <select 
              name="sidoName" 
              id="sidoName"
              ref={sidoNameRef}
              onChange={(e) => {
                setRegIdName((prev)=> ({ ...prev, sidoName: e.target.value }));
              }}
            >
              {
                sidoNameList.map((item, index) => {
                  return (
                    <option key={index} value={item}>{item}</option>
                  );
                })
              }
            </select>
          </div>
          <div>
            <p>측정도시 : {regIdName.sidoName}</p>
          </div>
          <table border={1} id='dustTable'>
            {dustRender(dustList)}
          </table>
        </section>

      </section>

      
    </section>
    </>
  )
}

export default FrontMain