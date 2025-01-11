import React, { useState, useEffect, useContext } from 'react';

import DOMPurify from 'dompurify';
import BoardStatusContexts from '../../contexts/BoardStatusContexts.jsx';
import axios from 'axios';

const BoardDetail = () => {
  
  const {
    appleBoard, setAppleBoard
  } = useContext(BoardStatusContexts);
  
  const [sanitizedContent, setSanitizedContent] = useState(null);
  
  useEffect(() => {
    axios.get('http://localhost:80/appleBoard/getBoardDetail?appleBoardNo=' + appleBoard.appleBoardNo)
    .then((response) => {
      console.log(response.data);
      const board = response.data;
      setAppleBoard(board);
    })
    .catch((error) => {
      console.error('Failed to fetch board list:', error);
    });

  }, [appleBoard.appleBoardNo]);

  // appleBoard가 업데이트될 때 sanitizedContent를 업데이트
  useEffect(() => {
    if (appleBoard.appleBoardContent) {
      setSanitizedContent(DOMPurify.sanitize(appleBoard.appleBoardContent));
    }
  }, [appleBoard]);

  if (!appleBoard.appleBoardTitle) {
    return <div>Loading...</div>;
  }

  return (
  <div id='board-detail'>
    <section id="board-info">
      <h1>Board Details</h1>
      <div>
        <div>Title:</div>
        <div>{appleBoard.appleBoardTitle}</div>

        <div>Category:</div>
        <div>{appleBoard.appleBoardCategoryName}</div>
      </div><div>
        <div>Writer:</div>
        <div>{appleBoard.appleMemberName}</div>

        <div>RegDate:</div>
        <div>{appleBoard.appleBoardRegDate}</div>
      </div>
    </section>
    <h1>Content</h1>
    <section id='board-content'>
      <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
    </section>


  </div>
);
}

export default BoardDetail;