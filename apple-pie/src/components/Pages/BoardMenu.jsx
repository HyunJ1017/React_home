import React, { useContext } from 'react';

import BoardStatusContexts from '../../contexts/BoardStatusContexts.jsx';

const BoardMenu = () => {
  const {
    boardPageStatus,
    setBoardPageStatus,
    deleteBoard,
    setFormData,
    handlerWriteSubmit,
    clearFormData,
    handlerUpdateSubmit,
    appleBoard,
  } = useContext(BoardStatusContexts);

  const insertBoard = (FlStatus) => {
    setFormData((prev) => ({ ...prev, appleBoardDelFl: FlStatus }));
    handlerWriteSubmit();
  };

  return (
    <section id='board-menu'>
      {boardPageStatus === 'boardList' && (
        <div
          onClick={() => {
            clearFormData();
            setBoardPageStatus('boardWrite');
          }}
        >
          글쓰기
        </div>
      )}

      {boardPageStatus === 'boardDetail' && (
        <div
          onClick={() => {
            setFormData(appleBoard);
            setBoardPageStatus('boardUpdate');
          }}
        >
          수정
        </div>
      )}

      {(boardPageStatus === 'boardDetail' || boardPageStatus === 'boardUpdate') && (
        <div onClick={deleteBoard}>삭제</div>
      )}

      {boardPageStatus === 'boardWrite' && (
        <>
          <div onClick={() => insertBoard('T')}>임시저장</div>
          <div onClick={() => insertBoard('N')}>저장</div>
        </>
      )}

      {boardPageStatus === 'boardUpdate' && (
        <div onClick={handlerUpdateSubmit}>저장</div>
      )}

      {boardPageStatus !== 'boardList' && (
        <div onClick={() => setBoardPageStatus('boardList')}>목록으로</div>
      )}
    </section>
  );
};

export default BoardMenu;
