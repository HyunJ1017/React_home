import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const WthrBox2Area = () => {

  const wthrMapRef = useRef(null);

  useEffect(() => {
    methodAxios2();
  }, []);

  // 날시불러오기2
  const methodAxios2 = () => {
    let baseDate = '';
    let baseTime = '';
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    if( minute < 15){
      date = new Date(year, month, day, hour-1);
    } 
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();
    hour = date.getHours();
    if(month < 10){
      if(day < 10){
        baseDate = year + '0' + month + '0' + day;
      } else {
        baseDate = year + '0' + month + day;
      }
    } else {
      if(day < 10){
        baseDate = year + month + '0' + day;
      } else {
        baseDate = year + month + day;
      }
    }
    if(hour < 10){
      baseTime = '0' + hour + '00';
    } else {
      baseTime = hour + '00';
    }
    axios.get("http://192.168.219.100:80/getWthr/now?nx=54&ny=125&baseDate=" + baseDate + "&baseTime=" + baseTime)
    .then(response => {
      console.log(response.data);

      const resultMap = response.data;

      wthrMapRef.current.innerHTML = ''
      +`<div class="weather-title">${
        resultMap.rainType === '0' ? '🌞' :
        resultMap.rainType === '1' ? '☔' :
        resultMap.rainType === '2' ? '☔☃️' :
        resultMap.rainType === '3' ? '☃️' :
        resultMap.rainType === '5' ? '🌂' :
        resultMap.rainType === '6' ? '☂️' :
        resultMap.rainType === '7' ? '⛄' : '☄️'
      }</div>`
      +`<div>기온 :  ${resultMap.tamperature}℃</div>`
      +`<div>습도 :  ${resultMap.humidity}%</div>`
      +`<div>강수량 :  ${resultMap.rainAmount}mm</div>`
      +`<div>강수형태 :  ${
        resultMap.rainType === '0' ? '없음' :
        resultMap.rainType === '1' ? '비' :
        resultMap.rainType === '2' ? '비/눈' :
        resultMap.rainType === '3' ? '눈' :
        resultMap.rainType === '5' ? '빗방울' :
        resultMap.rainType === '6' ? '빗방울눈날림' :
        resultMap.rainType === '7' ? '눈날림' : '장담할수없음'
      }</div>`
      +`<div>풍향 :  ${
        resultMap.windDir < 22.5 ? "북풍" :
        resultMap.windDir < 67.5 ? "북동풍" :
        resultMap.windDir < 112.5 ? "동풍" :
        resultMap.windDir < 157.5 ? "남동풍" :
        resultMap.windDir < 202.5 ? "남풍" :
        resultMap.windDir < 247.5 ? "남서풍" :
        resultMap.windDir < 292.5 ? "서풍" :
        resultMap.windDir < 337.5 ? "북서풍" : "북풍"
      }</div>`
      +`<div>풍속 :  ${resultMap.windSpeed === 1 ? '약함' : resultMap.windSpeed === 2 ? '중간' : '약함'}</div>`
      +'';
      
    })
    .catch(err => console.log(err));
  }

  return (
  <section ref={wthrMapRef}>WthrBox2Area</section>
);
};

export default WthrBox2Area;