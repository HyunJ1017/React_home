import React, {useContext,  useState} from 'react';

import PageStatusContext from '../../contexts/PageStatusContexts.jsx';
import BoardStatusContexts from '../../contexts/BoardStatusContexts.jsx';
import BoardList from './BoardList.jsx';

const BoardManager = () => {

  // context로 분배한 전역변수
  const {currnetPage, setCurrentPage} = useContext(PageStatusContext);

  const [boardPageStatus, setBoardPageStatus] = useState('boardList');
  const [boardCurrentPage, setBoardCurrentPage] = useState('1');
  const [boardCurrentCategory, setBoardCurrentCategory] = useState('0');
  const [boardListLimit, setBoardListLimit] = useState([]);
  const [boardList, setBoardList] = useState([]);

  return (
    <BoardStatusContexts.Provider value={
      { boardPageStatus, setBoardPageStatus,
        boardCurrentPage, setBoardCurrentPage,
        boardCurrentCategory, setBoardCurrentCategory, 
        boardListLimit, setBoardListLimit, 
        boardList, setBoardList}}>

      <section id='board-page'>
      <div>BoardManager</div>
      <div className='flexRow'>
        <div>현재 페이지 : {boardCurrentPage}</div>
        <div>현재 카테고리 : {boardCurrentCategory}</div>
      </div>
      { boardPageStatus === 'boardList' && <BoardList />}
      {/* { boardPageStatus === 'boardDetail' && <BoardDetail />} */}
      {/* { boardPageStatus === 'boardWrite' && <BoardWrite />} */}
      {/* { boardPageStatus === 'boardUpdate' && <BoardUpdate />} */}
      {/* { boardPageStatus === 'boardList' && <Pagination />} */}
      {/* { boardPageStatus !== 'boardList' && <BoardMenu />} */}

      </section>

    </BoardStatusContexts.Provider>
  );
}

export default BoardManager;