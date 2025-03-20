import React from 'react';

const Profile = () => {
  return (
    <>
      <section className="contents-section rowbox" id="profile-section">

        <div className="harf-row">
          
          <div className="img-container">
            <img src="images/profile.jpg" id="profile-img" alt="내사진" />
          </div>

        </div>

        <div className="harf-row" id="profile-box">

          <h1>박현준</h1>
          <h4>Park Hyunj Jun</h4>
          <p id="email">
            <i className="fa-duotone fa-regular fa-envelopes"></i>
            hyunj1017@naver.com
          </p>
          <p id="phone">
            <i className="fa-duotone fa-light fa-phone"></i>
            010- 2113-3766
          </p>
          <p id="locate">
            <i className="fa-sharp-duotone fa-solid fa-compass"></i>
            인천 동구
          </p>
          <div className="skill-box" id="mainSkill-box">
            <a className="link-on sliderA" href="#stack-html">HTML</a>
            <a className="link-on sliderA" href="#stack-js">JS</a>
            <div className="link-none">CSS</div>
            <a className="link-on sliderA" href="#stack-oracle">Oracle</a>
            <div className="link-none">WebSocket</div>
            <div className="link-none">Redis</div>
            <div className="link-none">React</div>
            <div className="link-none">GitHub</div>
            <a className="link-on sliderA" href="#stack-fireBase">FireBase</a>
          </div>
          <div id="link-icon">
            <a href="https://github.com/HyunJ1017"><i className="fa-brands fa-github" ></i></a>
            <a href="https://hyunj1017.tistory.com/"><i className="fa-solid fa-circle-t"></i></a>
          </div>

        </div>
        
      </section>
    </>
  );
};

export default Profile;