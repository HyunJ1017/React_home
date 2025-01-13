import React, { useState, useEffect } from 'react'

import axios from 'axios';

import 'css/frontPage/frontMain.css'

const FrontMain = () => {

  const [allVisitCount, setAllvisitCount] = useState(0);
  const [weeklyVisitCountList, setWeeklyVisitCountList] = useState([]);

  // 랜더링시 방문자 수 요청
  useEffect(() => {
    console.log('useEffect');
    getAllVisitCount();
  }, []);

  // 방문자 수 서버요청
  const getAllVisitCount = async () => {
    try {
      const response = await axios.get('http://localhost:80/front/getVisitCount');
      console.log('Success:', response.data);
      setAllvisitCount(response.data.allVisitCount);
      setWeeklyVisitCountList(response.data.weeklyVisitCountList);
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
    console.log(max);
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

  return (
    <>
    <div>FrontMain</div>
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
    </section>
    </>
  )
}

export default FrontMain