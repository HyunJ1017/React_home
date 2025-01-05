import React, {useRef, useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // 스타일 필요

const BoardEx = () => {

  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted content:', content);
  };

  return (
    <>
    <form onSubmit={handleSubmit} id='quillForm'>
      <label htmlFor="board-title">Title : <input type="text" id="board-title" name='appleBoardTitle'/></label>
      <label htmlFor="board-category">
        Category :
        <select name="appleBoardCategory" id="board-category">
          <option value="1">없음</option>
        </select>
      </label>
      <ReactQuill
        theme="snow"
        value={content}
        onChange={setContent}
        placeholder="Write your content here..."
        name='appleBoardContent'
      />
      <button type="submit">Submit</button>
    </form>
    </>
  );
}

export default BoardEx;