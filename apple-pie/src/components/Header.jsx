import React, {useContext} from 'react';
import PageStatusContext from '../contexts/PageStatusContexts.jsx';

const Header = () => {
  const { loginCheck, setLoginCheck, currnetPage, setCurrentPage } = useContext(PageStatusContext);
  return (
    <div id="header">
      <section>
        <div><i class="fa-brands fa-react fa-spin"></i></div>
        <div>
          <h1>React Project</h1>
        </div>
        <div></div>
      </section>
      { loginCheck === true && (
        <section>
          <div onClick={() => setCurrentPage('main')}>first</div>
          <div onClick={() => setCurrentPage('boardList')}>second</div>
          <div>third</div>
          <div>fourth</div>
          <div>fifth</div>
        </section>
      ) }
    </div>
  );
}

export default Header;