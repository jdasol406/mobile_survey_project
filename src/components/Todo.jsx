import { useState, useRef } from 'react';
import './Todo.css';
import RegisterButton from './RegisterButton';
import BackButton from './BackButton';

function Todo() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const updateButtonRef = useRef(null); 
  const [currentIndex, setCurrentIndex] = useState();

  const inputChange = (e) => {
    setInput(e.target.value);
  };

  const updateBtnFunk = (displayStyle) => {
    if (updateButtonRef.current) {
      updateButtonRef.current.style.display = displayStyle;
    }
  }

  const updateFunk = (e) => {
    const trimmedText = e.currentTarget.textContent.trim();
    const editText = trimmedText.slice(0, -2);

    setInput(editText);
    
    const todoIndex = e.currentTarget.dataset.index;
    setCurrentIndex(todoIndex);

    updateBtnFunk("block");

  };

  const updateTodo = () => {
    if (currentIndex !== null) {
      
      const newTodos = [...todos];
      newTodos[currentIndex] = input;
      setTodos(newTodos); 

      setInput(''); 
      setCurrentIndex(null);
    }

    updateBtnFunk("none");
  };

  const deleteTodo = (index, e) => {
    e.stopPropagation();

    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);

    updateBtnFunk("none");
  };

  return (
    <>
      <div>
        <h1>Todo List</h1>
      </div>
      <div id='todo-list'>
        <div id='write-div'>
          <input value={input} onChange={inputChange} id='list-input' />
          <RegisterButton input={input} setInput={setInput} todos={todos} setTodos={setTodos} updateBtnFunk={updateBtnFunk}/>
          <button id='update-btn' onClick={updateTodo} ref={updateButtonRef}>수정</button> {/* 초기 상태를 none으로 설정 */}
        </div>
        <div id='list'>
          <ul>
            {todos.map((todo, index) => (
              <li data-index={index} onClick={updateFunk} key={index}>
                {todo}
                <button id='delete-btn' onClick={(e) => deleteTodo(index, e)}>삭제</button> {/* 이벤트 전파 막기 */}
              </li>
            ))}
          </ul>
        </div>
        <BackButton setInput={setInput} setCurrentIndex={setCurrentIndex} updateBtnFunk={updateBtnFunk}/>
      </div>
    </>
  );
}

export default Todo;
