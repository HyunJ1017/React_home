import React, { useState, useContext, useEffect } from 'react';

import BoardStatusContexts from '../../contexts/BoardStatusContexts.jsx';
import axios from 'axios';

const BoardList = () => {

  // context로 분배한 전역변수
  const {boardPageStatus, setBoardPageStatus,
    boardPagination, setBoardPagination, 
    boardCurrentPage, setBoardCurrentPage, 
    boardCurrentCategory, setBoardCurrentCategory, 
    boardListLimit, setBoardListLimit, 
    boardList, setBoardList,
    appleBoard, setAppleBoard} = useContext(BoardStatusContexts);

  useEffect(() => {
    getBoardList();
  }, [boardCurrentPage, boardCurrentCategory, boardListLimit]);

  const getBoardList = () => {

    axios.get('http://localhost:80/appleBoard/getBoardList?cp=' + boardCurrentPage + '&category=' + boardCurrentCategory + '&limit=' + boardListLimit)
    .then((response) => {
      console.log(response.data);
      const pagination = response.data.pagination;
      const boardList = response.data.boardList;
      setBoardList(boardList);
      setBoardPagination(pagination);
    })
    .catch((error) => {
      console.error('Failed to fetch board list:', error);
    });
  }

  return (
    <section id='BoardList-section'>
      <h1>BoardList</h1>
      <table border={1} id='BoardList-table'>
        <thead>
          <tr>
            <th>No</th>
            <th>Category</th>
            <th>Title</th>
            <th>Writer</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
        {boardList.length > 0 ? (
          boardList.map((item, index) => (
            <tr key={item.appleBoardNo}>
              <td>{item.appleBoardNo}</td>
              <td>{item.appleBoardCategoryName}</td>
              <td onClick={() => {setAppleBoard((prev) => ({ ...prev, appleBoardNo : item.appleBoardNo })); setBoardPageStatus('boardDetail');}}>{item.appleBoardTitle}</td>
              <td>{item.appleMemberName}</td>
              <td>{item.appleBoardRegDate}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5} style={{ textAlign: 'center' }}>There is No List</td>
          </tr>
        )}
        </tbody>
      </table>
    </section>
  );
}

export default BoardList;