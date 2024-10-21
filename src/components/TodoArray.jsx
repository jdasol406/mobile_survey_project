import { useState } from 'react';
import TodoUpdate from './TodoUpdate';

const TodoArray = ({input, setInput, todos, setTodos}) => {
  const [input2, setInput2] = useState('');
  const [currentIndex, setCurrentIndex] = useState();


  const updateFunk = (e) => {
    const trimmedText = e.currentTarget.textContent.trim();
    const editText = trimmedText.slice(0, -2);

    setInput2(editText);
    
    const todoIndex = e.currentTarget.dataset.index;
    setCurrentIndex(todoIndex);
  };

  const deleteTodo = (index, e) => {
    e.stopPropagation();

    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);

    setInput(''); 
  };

  return (
    <>
      <div>
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
        <div>
          <TodoUpdate todos={todos} setTodos={setTodos} input2={input2} setInput2={setInput2} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
        </div>
      </div>
    </>
  )
}

export default TodoArray;