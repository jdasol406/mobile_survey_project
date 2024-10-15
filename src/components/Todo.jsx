import { useState, useRef } from 'react';
import './Todo.css';

function Todo() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const updateButtonRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState();

  const inputChange = (e) => {
    setInput(e.target.value);
  };

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input]);
      setInput('');
    }

    updateBtnFunk("none");
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

  const backBtn = () => {
    
    setInput(''); 
    setCurrentIndex(null); 

    updateBtnFunk("none");
  }

  return (
    <>
      <div>
        <h1>Todo List</h1>
      </div>
      <div id='todo-list'>
        <div id='write-div'>
          <input value={input} onChange={inputChange} id='list-input' />
          <button id='regiter-btn' onClick={addTodo}>등록</button>
          <button id='update-btn' onClick={updateTodo} ref={updateButtonRef}>수정</button>
        </div>
        <div id='list'>
          <ul>
            {todos.map((todo, index) => (
              <li data-index={index} onClick={updateFunk} key={index}>
                {todo}
                <button id='delete-btn' onClick={(e) => deleteTodo(index, e)}>삭제</button>
              </li>
            ))}
          </ul>
        </div>
        <button id='back-btn' onClick={backBtn}> 🔙 </button>
      </div>
    </>
  );
}

export default Todo;
