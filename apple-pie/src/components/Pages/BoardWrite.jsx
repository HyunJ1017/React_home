import React, {useContext} from 'react';
import BoardStatusContexts from '../../contexts/BoardStatusContexts';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // 스타일 필요

const BoardWrite = () => {

  const {formData, setFormData, handlerWriteInputChange} = useContext(BoardStatusContexts);


  return (
    <>
      <div>BoardWrite</div>
      <label htmlFor="board-title">
        Title :&nbsp;
        <input type="text"
          name="appleBoardTitle"
          value={formData.appleBoardTitle}
          onChange={handlerWriteInputChange}
        />
      </label>
      <label htmlFor="board-category">
        Category :&nbsp;
        <select 
          name="appleBoardCategory"
          value={formData.category}
          onChange={handlerWriteInputChange}
        >
          <option value="1">없음</option>
        </select>
      </label>
      <ReactQuill
        theme="snow"
        value={formData.appleBoardContent}
        onChange={(value) => setFormData((prev) => ({ ...prev, appleBoardContent: value }))}
        placeholder="Write your content here..."
      />
    </>
  );
}

export default BoardWrite;