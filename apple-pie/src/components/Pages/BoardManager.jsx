import React, {useContext,  useState, useRef} from 'react';

import PageStatusContext from '../../contexts/PageStatusContexts.jsx';
import BoardStatusContexts from '../../contexts/BoardStatusContexts.jsx';
import BoardList from './BoardList.jsx';
import BoardWrite from './BoardWrite.jsx';
import BoardDetail from './BoardDetail.jsx';
import Pagination from './Pagination.jsx';
import BoardMenu from './BoardMenu.jsx';

const BoardManager = () => {

  // context로 분배한 전역변수
  const {currnetPage, setCurrentPage} = useContext(PageStatusContext);

  const [boardPageStatus, setBoardPageStatus] = useState('boardList');
  const [boardPagination, setBoardPagination] = useState('1');
  const [boardCurrentPage, setBoardCurrentPage] = useState('1');
  const [boardCurrentCategory, setBoardCurrentCategory] = useState('0');
  const [boardListLimit, setBoardListLimit] = useState([]);
  const [boardList, setBoardList] = useState([]);
  const [boardCurrentDetaileNo, setBoardCurrentDetaileNo] = useState([]);

  const insertBoard = (appleDelFl) => {
    console.log('appleDelFl:', appleDelFl);
  };

  const deleteBoard = () => {
    console.log('deleteBoard:', boardCurrentDetaileNo);
  }

  const boardSubmitFormRef = useRef();

  return (
    <BoardStatusContexts.Provider value={
      { boardPageStatus, setBoardPageStatus,
        boardPagination, setBoardPagination,
        boardCurrentPage, setBoardCurrentPage,
        boardCurrentCategory, setBoardCurrentCategory, 
        boardListLimit, setBoardListLimit, 
        boardList, setBoardList,
        boardCurrentDetaileNo, setBoardCurrentDetaileNo,
        insertBoard, deleteBoard}}>

      <section id='board-page'>
      <div>BoardManager</div>
      <div className='flexRow'>
        <div>현재 페이지 : {boardCurrentPage}</div>
        <div>현재 카테고리 : {boardCurrentCategory}</div>
        <div>boardPagination.prevPage : {boardPagination.prevPage}</div>
        <div>boardPagination.nextPage : {boardPagination.nextPage}</div>
        <div>boardPagination.maxPage : {boardPagination.maxPage}</div>
        <div>boardPagination.startPage : {boardPagination.startPage}</div>
        <div>boardPagination.endPage : {boardPagination.endPage}</div>
      </div>
      { boardPageStatus === 'boardList' && <BoardList />}
      { boardPageStatus === 'boardDetail' && <BoardDetail />}
      { boardPageStatus === 'boardWrite' && <BoardWrite boardSubmitFormRef={boardSubmitFormRef} />}
      {/* { boardPageStatus === 'boardUpdate' && <BoardUpdate />} */}
      { boardPageStatus === 'boardList' && <Pagination boardSubmitFormRef={boardSubmitFormRef} />}
      <BoardMenu />

      </section>

    </BoardStatusContexts.Provider>
  );
}

export default BoardManager;