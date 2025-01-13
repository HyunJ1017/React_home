import React, {useContext} from 'react';

import PageStateContext from 'contexts/PageStateContext.jsx';

import Door from './Door.jsx';
import Header from '../common/Header.jsx';
import Footer from '../common/Footer.jsx';
import FrontPage from '../frontPage/FrontMain.jsx';


const Main = () => {

  const { currentPage } = useContext(PageStateContext);

  return (
    <>
    <Door/>
    <Header/>
    <main>
      {currentPage === 'frontPage' && <FrontPage/>}
    </main>
    <Footer/>
  </>
  );
}

export default Main;