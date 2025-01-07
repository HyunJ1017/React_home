import React, {useContext} from 'react';

import BoardStatusContexts from '../../contexts/BoardStatusContexts';

const Pagination = () => {
  const {boardPagination, boardCurrentPage, setBoardCurrentPage} = useContext(BoardStatusContexts);

  // 페이지 번호 배열 생성
  const pageNumbers = [];
  for (let i = boardPagination.startPage; i <= boardPagination.endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div id='Pagination'>
      <div onClick={() => setBoardCurrentPage(1)}>&lt;&lt;</div>
      <div onClick={() => boardPagination.prevPage}>&lt;</div>
      {pageNumbers.map((page) => (
        <div
          key={page}
          onClick={() => setBoardCurrentPage(page)}
          className={page === boardCurrentPage ? 'currentPage' : ''}
        >
          {page}
        </div>
      ))}
      <div onClick={() => boardPagination.nextPage}>&gt;</div>
      <div onClick={() => boardPagination.maxPage}>&gt;</div>
    </div>
  );
}

export default Pagination;