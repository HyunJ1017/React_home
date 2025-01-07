import React, { useState, useContext } from 'react';

import BoardStatusContexts from '../../contexts/BoardStatusContexts.jsx';

const BoardMenu = () => {

  const {boardPageStatus, setBoardPageStatus, insertBoard, deleteBoard} = useContext(BoardStatusContexts);

  return (
    <section id='board-menu'>
      {boardPageStatus === 'boardList' && (<div onClick={() => setBoardPageStatus('boardWrite')}>글쓰기</div>)}
      {boardPageStatus === 'boardDetail' && (<div onClick={() => setBoardPageStatus('boardUpdate')}>수정</div>)}
      {boardPageStatus === 'boardDetail' && (<div onClick={() => deleteBoard()}>삭제</div>)}
      {boardPageStatus === 'boardWrite' && (<div onClick={() => insertBoard('T')}>임시저장</div>)}
      {boardPageStatus === 'boardWrite' && (<div onClick={() => insertBoard('N')}>저장</div>)}
      {boardPageStatus !== 'boardList' && (<div onClick={() => setBoardPageStatus('boardList')}>목록으로</div>)}
    </section>
  );
};

export default BoardMenu;
