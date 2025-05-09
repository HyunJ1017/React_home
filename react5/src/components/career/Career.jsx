import React from 'react';

import ProfileImg from 'images/profile.jpg';

import 'css/pages/career.css';

const Career = () => {
  return (
    <>
      <section className="contents-section rowbox" id="log-section">

        {/* 좌측 사진구역 */}
        <div className="harf-row">
          <div className="img-container">
            <img src={ProfileImg} id="profile-img" alt="내사진" />
          </div>
        </div>

        {/* 우측 메뉴구역 */}
        <div className="harf-row" id="log-contents">
          <ul>
            <li>훈련기관</li>
            <li>KH정보교육원</li>
            <li>훈련과정</li>
            <li>공공데이터 융합 자바개발자 양성과정</li>
            <li>훈련직종</li>
            <li>디지털컨버전스</li>
            <li>훈련기간</li>
            <li>2024.06.24 - 2024.12.06</li>
            <li><i className="fa-solid fa-share-from-square"></i>세미 프로젝트 링크(준비중)</li>
            <li></li>
            <li><a target="_blank" rel="noreferrer" href="http://3.104.109.149/main"><i className="fa-solid fa-share-from-square" ></i>파이널 프로젝트 링크</a></li>
          </ul>
          <div className="skill-box" id="logSkill-box">
            <div className="skill-relative" >
              <div className="skill-change">UI 디자인</div>
              <div className="skill-absolute">100/100</div>
            </div>
            <div className="skill-relative" >
              <div className="skill-change">UI 구현</div>
              <div className="skill-absolute">100/100</div>
            </div>
            <div className="skill-relative" >
              <div className="skill-change">프로그래밍 언어 활용</div>
              <div className="skill-absolute">100/100</div>
            </div>
            <div className="skill-relative" >
              <div className="skill-change">프로그래밍 언어 응용</div>
              <div className="skill-absolute">100/100</div>
            </div>
            <div className="skill-relative" >
              <div className="skill-change">네트워크 프로그래밍 구현</div>
              <div className="skill-absolute">100/100</div>
            </div>
            <div className="skill-relative" >
              <div className="skill-change">SQL활용</div>
              <div className="skill-absolute">100/100</div>
            </div>
            <div className="skill-relative" >
              <div className="skill-change">데이터베이스 구현</div>
              <div className="skill-absolute">100/100</div>
            </div>
            <div className="skill-relative" >
              <div className="skill-change">SQL응용</div>
              <div className="skill-absolute">75/100</div>
            </div>
            <div className="skill-relative" >
              <div className="skill-change">인터페이스 구현</div>
              <div className="skill-absolute">100/100</div>
            </div>
            <div className="skill-relative" >
              <div className="skill-change">서버프로그램 구현</div>
              <div className="skill-absolute">87.5/100</div>
            </div>
            <div className="skill-relative" >
              <div className="skill-change">통합 구현</div>
              <div className="skill-absolute">100/100</div>
            </div>
            <div className="skill-relative" >
              <div className="skill-change">요구사항 확인</div>
              <div className="skill-absolute">100/100</div>
            </div>
            <div className="skill-relative" >
              <div className="skill-change">애플리케이션 설계</div>
              <div className="skill-absolute">80/100</div>
            </div>
            <div className="skill-relative" >
              <div className="skill-change">프로젝트 기반 공공데이터 아키텍처 설계</div>
              <div className="skill-absolute">100/100</div>
            </div>
            <div className="skill-relative" >
              <div className="skill-change">프로젝트 기반 공공데이터 활용</div>
              <div className="skill-absolute">100/100</div>
            </div>
            <div className="skill-relative" >
              <div className="skill-change">화면 구현</div>
              <div className="skill-absolute">100/100</div>
            </div>
            <div className="skill-relative" >
              <div className="skill-change">애플리케이션 배포</div>
              <div className="skill-absolute">100/100</div>
            </div>
            <div className="skill-relative" >
              <div className="skill-change">애플리케이션 테스트 수행</div>
              <div className="skill-absolute">100/100</div>
            </div>
          </div>
        </div>

      </section>

      <section class="contents-section colbox" id="skillStack-section">
        <div class="title-col">
          <h2>Git-CodeStack</h2>
        </div>
        <div class="contents-col rowbox">
          <div style={{maxWidth: '600px', margin: '0 auto'}} class="harf-row">
            <iframe 
              title='TOP Languages'
              class="responsive-iframe"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=HyunJ1017" 
              frameborder="0">
            </iframe>
          </div>
          <div class="harf-row colbox">
            <iframe 
                title='Github Stats'
                src="https://github-readme-stats.vercel.app/api?username=HyunJ1017&hide=contribs,prs&show_icons=true&theme=graywhite" 
                frameborder="0" 
                width="600px" 
                height="200px">
            </iframe>
            <iframe 
                title='Github Streak'
                src="https://streak-stats.demolab.com?user=HyunJ1017" 
                frameborder="0" 
                width="600px" 
                height="200px">
            </iframe>
          </div>

        </div>
        <div class="contents-col rowbox">

          <img src="https://ghchart.rshah.org/HyunJ1017" alt="GitHub Contribution Chart" />

        </div>
      </section>

    </>
  );
};

export default Career;
