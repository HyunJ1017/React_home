import React, { useContext } from 'react';

import BoardStatusContexts from '../../contexts/BoardStatusContexts.jsx';

const BoardMenu = () => {

  const {
    boardPageStatus, setBoardPageStatus, deleteBoard,
    setFormData, handlerWriteSubmit, clearFormData } = useContext(BoardStatusContexts);


  const insertBoard = (FlStatus) => {
    // 임시저장 클릭시 't', 저장 클릭시 'n'
    setFormData((prev) => ({ ...prev, appleBoardDelFl : FlStatus }));
    handlerWriteSubmit();
  }

  return (
    <section id='board-menu'>
      {boardPageStatus === 'boardList' && (<div onClick={() => {clearFormData(); setBoardPageStatus('boardWrite')}}>글쓰기</div>)}
      {boardPageStatus === 'boardDetail' && (<div onClick={() => setBoardPageStatus('boardUpdate')}>수정</div>)}
      {( boardPageStatus === 'boardDetail' || boardPageStatus === 'boardUpdate' ) && (<div onClick={() => deleteBoard()}>삭제</div>)}
      {boardPageStatus === 'boardWrite' && (<div onClick={() => insertBoard('T')}>임시저장</div>)}
      {boardPageStatus === 'boardWrite' && (<div onClick={() => insertBoard('N')}>저장</div>)}
      {boardPageStatus !== 'boardList' && (<div onClick={() => setBoardPageStatus('boardList')}>목록으로</div>)}
    </section>
  );
};

export default BoardMenu;
