import React, {useContext} from 'react';

import PageStateContext from 'contexts/PageStateContext.jsx';


const Header = () => {

  const { currentPage, setCurrentPage } = useContext(PageStateContext);

  return (
    <>
    <header>
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
      <section>
      </section>
    </header>
    </>
  )
};

export default Header;