import { useState, useRef } from 'react';
import './Todo.css';

const Write = () => {

  return (
    <>
      <div>
        <div id='write-div'>
          <input value={input} onChange={inputChange} id='list-input' />
          <button id='regiter-btn' onClick={addTodo}>등록</button>
          <button id='update-btn' onClick={updateTodo} ref={updateButtonRef}>수정</button>
        </div>
      </div>
    </>
  )
}

export default Write