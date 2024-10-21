import './Todo.css';

const TodoEnter = ({input, setInput, todos, setTodos}) => {
  const inputChange = (e) => {
    setInput(e.target.value);
  };

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  return (
    <>
      <input value={input} onChange={inputChange} id='list-input' />
      <button id='regiter-btn' onClick={addTodo}>등록</button>
    </>
  )
}

export default TodoEnter;