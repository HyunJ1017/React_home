import React from 'react';

import 'css/pages/project.css';

const Project = () => {
  return (
    <>
      <section className="contents-section colbox">
        <div className="title-col" id="semi-section">
          <h2>SemiProject</h2>
        </div>
        <div className="contents-col rowbox">
          <div className="harf-row">
            <img src="images/semi/semiProjectMain.png" id="semi-img" alt="세미이미지"/>
          </div>
          <div className="harf-row project-contents" id="project-semi">
            <ul>
              <li><a target="_blank" href="https://free-quark-318.notion.site/Daemoim-Project-12fd734294028062b542ce5912b6c94c?pvs=4"><i className="fa-solid fa-share-from-square" style="color: #ffffff;"></i>프로젝트 노션 링크</a></li>
              <li><a target="_blank" href="https://github.com/LeeNS-2024/daemoim"><i className="fa-solid fa-share-from-square" style="color: #ffffff;"></i>GitHub 링크<i className="fa-brands fa-github" style="color: #ffffff;"></i></a></li>
              <li><a target="_blank" href="https://www.erdcloud.com/d/qkyXFeMDqXdgwA585"><i className="fa-solid fa-share-from-square" style="color: #ffffff;"></i>DB 설계 링크</a></li>
              <li><img src="images/semi/daemoimERD.png" id="semi-erd" alt="세미설계"/></li>
              <li>제작 기간 : 2024.09.12 - 10.31</li>
              <li>역할 : 팀원</li>
              <li>
                <table border="1" className="userTheme-borderTable">
                  <caption>담당 기능</caption>
                  <thead>
                    <tr>
                      <th>기능</th>
                      <th>내용</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th rowspan="2">모임생성</th>
                      <td>다른 회원들과 사용할 모임을 생성</td>
                    </tr>
                    <tr>
                      <td>입력 : 모임명, 모임소개글, 카테고리, 모임대표이미지</td>
                    </tr>
                    <tr>
                      <th rowspan="3">모임 상세정보 수정</th>
                      <td>모임장의 모임에 대한 관리페이지</td>
                    </tr>
                    <tr>
                      <td>회원관리 : 회원강퇴, 회원가입, 권한위임</td>
                    </tr>
                    <tr>
                      <td>정보수정 : 모임명, 소개글, 대표이미지, 해더이미지, 카테고리</td>
                    </tr>
                    <tr>
                      <th>접근제한필터</th>
                      <td>회원 또는 비회원의 페이지별 접근제한 기능</td>
                    </tr>
                    <tr>
                      <th>채팅</th>
                      <td>로그인 회원이 가입된 모임별 채팅방을 이용하는 기능</td>
                    </tr>
                    <tr>
                      <th>알림창</th>
                      <td>프로젝트 이용시 제공되는 알림창, 확인(컨펌)창을 대신하는 기능</td>
                    </tr>
                    <tr>
                      <th>팝업창</th>
                      <td>페이지 로딩시 노출되는 광고목적의 팝업창</td>
                    </tr>
                    
                  </tbody>
                </table>
              </li>
            </ul>

          </div>
        </div>
      </section>

      <section className="contents-section colbox" id="final-section">
        <div className="title-col">
          <h2>FinalProject</h2>
        </div>
        <div className="contents-col rowbox">
          <div className="harf-row">
            <img src="images/final/finalProjectMain.png" id="final-img" alt="파이널이미지" />
          </div>
          <div className="harf-row project-contents" id="project-final">
            <ul>
              <li><a target="_blank" href="http://3.104.109.149/main"><i className="fa-solid fa-share-from-square" style="color: #ffffff;"></i> 프로젝트 링크</a></li>
              <li><a target="_blank" href="https://free-quark-318.notion.site/135d7342940280f99f49f5f8ebd21e36?pvs=4"><i className="fa-solid fa-share-from-square" style="color: #ffffff;"></i> 프로젝트 노션 링크</a></li>
              <li><a target="_blank" href="https://github.com/HyunJ1017/OdagiriJoe"><i className="fa-solid fa-share-from-square" style="color: #ffffff;"></i> GitHub 링크<i className="fa-brands fa-github" style="color: #ffffff;"></i></a></li>
              <li><a target="_blank" href="https://www.erdcloud.com/d/uBNxxSCGY8FC7379T"><i className="fa-solid fa-share-from-square" style="color: #ffffff;"></i> DB 설계 링크</a></li>
              <li><img src="images/final/odagirijoeERD.png" id="final-erd" alt="파이널설계" /></li>
              <li>제작 기간 : 2024.11.05 - 12.05</li>
              <li>역할 : 팀장</li>
              <li>
                <table border="1" className="userTheme-borderTable">
                  <caption>담당 기능</caption>
                  <thead>
                    <tr>
                      <th>기능</th>
                      <th>내용</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>회원관리</th>
                      <td>회원가입/ 아이디찾기/ 비밀번호찾기/ 로그인</td>
                    </tr>
                    <tr>
                      <th rowspan="3">마이페이지</th>
                      <td>로그인한 회원 종류별 정보수정</td>
                    </tr>
                    <tr>
                      <td>회원별 편의기능</td>
                    </tr>
                    <tr>
                      <td>사이트 경매작품 등록</td>
                    </tr>
                    <tr>
                      <th>이미지등록</th>
                      <td>외부서버에 이미지 저장/관리</td>
                    </tr>
                    <tr>
                      <th>결제</th>
                      <td>import기능을 이용한 결제기능 제공</td>
                    </tr>
                    <tr>
                      <th>스캐쥴러</th>
                      <td>사이트 운영에 대한 스캐쥴러</td>
                    </tr>
                    <tr>
                      <th>파일출력</th>
                      <td>일부 필요정보 엑셀파일 출력</td>
                    </tr>
                    
                  </tbody>
                </table>
              </li>
            </ul>

          </div>
        </div>
      </section>
    </>
  );
};

export default Project;