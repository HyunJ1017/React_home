import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const WthrBox3Dust = () => {

  const wthrMapRef = useRef(null);

  useEffect(() => {
    methodAxios();
  }, []);

  // 날시불러오기
  const methodAxios = () => {

    const sidoName = '인천';

    axios.get("http://192.168.219.100:80/getWthr/dust?sidoName=" + sidoName)
    .then(response => {
      console.log(response.data);

      const resultMap = response.data;

      wthrMapRef.current.innerHTML = ''
      +`<div class="weather-title">${resultMap.pm10Grade}</div>`
      +`<div>${resultMap.pm10GradeText}</div>`
      +`<div>${resultMap.pm10Value}</div>`
      +`<div class="weather-title">${resultMap.pm25Grade}</div>`
      +`<div>${resultMap.pm25GradeText}</div>`
      +`<div>${resultMap.pm25Value}</div>`
      +'';
      
    })
    .catch(err => console.log(err));
  }

  return (
  <section ref={wthrMapRef}>WthrBox3Dust</section>
);
};

export default WthrBox3Dust;