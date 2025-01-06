import React, { useState, useContext, useEffect } from 'react';

import BoardStatusContexts from '../../contexts/BoardStatusContexts.jsx';
import axios from 'axios';

const BoardList = () => {

  // context로 분배한 전역변수
  const {boardPageStatus, setBoardPageStatus, boardCurrentPage, setBoardCurrentPage, boardCurrentCategory, setBoardCurrentCategory, boardListLimit, setBoardListLimit, boardList, setBoardList} = useContext(BoardStatusContexts);

  useEffect(() => {
    getBoardList(boardCurrentPage, boardCurrentCategory);
  }, []);

  const getBoardList = (page, category) => {
    console.log(page, category);

    axios.get('http://localhost:80/appleBoard/getBoardList?cp=' + page + '&category=' + category + '&limit=' + boardListLimit)
    .then((response) => {
      console.log(response.data);
      const pagination = response.data.pagination;
      const boardList = response.data.boardList;
      setBoardList(boardList);
    })
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
          {boardList.map( (item, index) => {return(
            <tr key={item.appleBoardNo}>
              <td>{item.appleBoardNo}</td>
              <td>{item.appleBoardCategoryName}</td>
              <td>{item.appleBoardTitle}</td>
              <td>{item.appleMemberName}</td>
              <td>{item.appleBoardRegDate}</td>
            </tr>)} )}
        </tbody>
      </table>
    </section>
  );
}

export default BoardList;