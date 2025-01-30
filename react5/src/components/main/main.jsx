import React, {useContext} from 'react';

import PageStateContext from 'contexts/PageStateContext.jsx';

import Door from './Door.jsx';
import Header from '../common/Header.jsx';
import Footer from '../common/Footer.jsx';
import FrontPage from '../frontPage/FrontMain.jsx';
import Profile from '../profile/Profile.jsx';
import Career from '../career/Career.jsx';
import Project from '../project/Project.jsx';


const Main = () => {

  const { currentPage } = useContext(PageStateContext);

  return (
    <>
    <Door/>
    <Header/>
    <main>
      {currentPage === 'FrontPage' && <FrontPage/>}
      {currentPage === 'Profile' && <Profile/>}
      {currentPage === 'Career' && <Career/>}
      {currentPage === 'Project' && <Project/>}
    </main>
    <Footer/>
  </>
  );
}

export default Main;