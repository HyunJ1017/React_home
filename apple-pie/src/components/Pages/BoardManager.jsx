import React, {useContext,  useState, useRef} from 'react';

import axios from 'axios';

import PageStatusContext from '../../contexts/PageStatusContexts.jsx';
import BoardStatusContexts from '../../contexts/BoardStatusContexts.jsx';
import BoardList from './BoardList.jsx';
import BoardWrite from './BoardWrite.jsx';
import BoardDetail from './BoardDetail.jsx';
import Pagination from './Pagination.jsx';
import BoardMenu from './BoardMenu.jsx';

const BoardManager = () => {

  // 게시판 페이지에서 사용할 변수들
  const [boardPageStatus, setBoardPageStatus] = useState('boardList');
  const [boardPagination, setBoardPagination] = useState('1');
  const [boardCurrentPage, setBoardCurrentPage] = useState('1');
  const [boardCurrentCategory, setBoardCurrentCategory] = useState('0');
  const [boardListLimit, setBoardListLimit] = useState([]);
  const [boardList, setBoardList] = useState([]);
  const [boardCurrentDetaileNo, setBoardCurrentDetaileNo] = useState([]);

  const deleteBoard = () => {
    console.log('deleteBoard:', boardCurrentDetaileNo);
  }

  /* 게시글작성용 상태변수 */
  const [formData, setFormData] = useState({
    appleBoardTitle: '',
    appleBoardCategoryNo: '1',
    appleBoardContent: '',
    appleBoardDelFl: 'N',
  });
  const handlerWriteInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handlerWriteSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:80/appleBoard/insert', formData);
      console.log('Success:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  const clearFormData = () => {
    setFormData({
      appleBoardTitle: '',
      appleBoardCategoryNo: '1',
      appleBoardContent: '',
      appleBoardDelFl: 'N',
    });
  };

  return (
    <BoardStatusContexts.Provider value={
      { boardPageStatus, setBoardPageStatus,
        boardPagination, setBoardPagination,
        boardCurrentPage, setBoardCurrentPage,
        boardCurrentCategory, setBoardCurrentCategory, 
        boardListLimit, setBoardListLimit, 
        boardList, setBoardList,
        boardCurrentDetaileNo, setBoardCurrentDetaileNo,
        deleteBoard, clearFormData,
        formData, setFormData, handlerWriteInputChange, handlerWriteSubmit}}>

      <section id='board-page'>
      <div>BoardManager</div>
      { boardPageStatus === 'boardList' && <BoardList />}
      { boardPageStatus === 'boardDetail' && <BoardDetail />}
      { boardPageStatus === 'boardWrite' && <BoardWrite />}
      {/* { boardPageStatus === 'boardUpdate' && <BoardUpdate />} */}
      { boardPageStatus === 'boardList' && <Pagination />}
      <BoardMenu />

      </section>

    </BoardStatusContexts.Provider>
  );
}

export default BoardManager;