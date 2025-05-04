import React, { useContext, useEffect, useState } from 'react';

import axios from 'axios';

import PageStateContext from 'contexts/PageStateContext.jsx';


const Header = () => {

  const { currentPage, setCurrentPage, allVisitCount, weeklyVisitCount } = useContext(PageStateContext);

  return (
    <>
    <header>
      <section>
        <section>
          {currentPage === 'FrontPage' &&
            <div><i class="fa-solid fa-house"></i></div>
            }
          {currentPage !== 'FrontPage' &&
            <div onClick={() => setCurrentPage('FrontPage')}>Home</div>
            }
        </section>
        <section>
          {currentPage === 'FrontPage' &&
            <div>Portfolio</div>
            }
          {currentPage !== 'FrontPage' &&
            <div>{currentPage}</div>
            }
        </section>
        <section id='visitCount'>
          <div>전체방문자 : {allVisitCount}</div>
          <div>주간방문자 : {weeklyVisitCount}</div>
        </section>
      </section>

      <section>
        <div className='pageBtn' onClick={()=>setCurrentPage('FrontPage')}>Main</div>
        <div className='pageBtn' onClick={()=>setCurrentPage('Profile')}>Profile</div>
        <div className='pageBtn' onClick={()=>setCurrentPage('Career')}>Career</div>
        <div className='pageBtn' onClick={()=>setCurrentPage('Project')}>Project</div>
      </section>
    </header>
    </>
  )
};

export default Header;