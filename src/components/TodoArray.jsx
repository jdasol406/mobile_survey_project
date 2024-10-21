import { useState } from 'react';
import TodoUpdate from './TodoUpdate';
import TodoMainList from './TodoMainList';

const TodoArray = ({input, setInput, todos, setTodos}) => {
  const [input2, setInput2] = useState('');
  const [currentIndex, setCurrentIndex] = useState();

  return (
    <>
      <div>
        <TodoMainList todos={todos} setTodos={setTodos} setInput2={setInput2} setCurrentIndex={setCurrentIndex}/>
        <div>
          <TodoUpdate todos={todos} setTodos={setTodos} input2={input2} setInput2={setInput2} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
        </div>
      </div>
    </>
  )
}

export default TodoArray;