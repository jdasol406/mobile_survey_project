import { useState, useRef } from 'react';
import './Todo.css';
import RegisterButton from './RegisterButton';
import BackButton from './BackButton';
import Input from './Input';
import UpdateButton from './UpdateButton';
import DeleteButton from './DeleteButton';

function Todo() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const updateButtonRef = useRef(null); 
  const [currentIndex, setCurrentIndex] = useState();

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

  return (
    <>
      <div>
        <h1>Todo List</h1>
      </div>
      <div id='todo-list'>
        <div id='write-div'>
          <Input input={input} setInput={setInput}/>
          <RegisterButton input={input} setInput={setInput} todos={todos} setTodos={setTodos} updateBtnFunk={updateBtnFunk}/>
          <UpdateButton input={input} todos={todos} setTodos={setTodos} setInput={setInput} updateButtonRef={updateButtonRef} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} updateBtnFunk={updateBtnFunk}/>
        </div>
        <div id='list'>
          <ul>
            {todos.map((todo, index) => (
              <li data-index={index} onClick={updateFunk} key={index}>
                {todo}
                <DeleteButton index={index} todos={todos} setTodos={setTodos} updateBtnFunk={updateBtnFunk}/>
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
