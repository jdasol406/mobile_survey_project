import { useState } from 'react';
import './Todo.css';
import TodoArray from './TodoArray';
import TodoEnter from './TodoEnter';

function Todolist() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <>
    <div id='wrap'>
      <h1 id='h1-todo'>Todo List</h1>
      <div id='todo-list'>
        <div id='write-div'>
          <TodoEnter input={input} setInput={setInput} todos={todos} setTodos={setTodos} />
        </div>
        <div>
          <TodoArray input={input} setInput={setInput} todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
    </>
  );
}

export default Todolist;

