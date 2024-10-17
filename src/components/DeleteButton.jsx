import './Todo.css';

const DeleteButton = ({index, todos, setInput, setTodos, updateBtnFunk}) => {
  const deleteTodo = (index, e) => {
    e.stopPropagation();

    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);

    setInput(''); 
    updateBtnFunk("none");
  };

  return (
    <>
      <button id='delete-btn' onClick={(e) => deleteTodo(index, e)}>삭제</button>
    </>
  )
} 

export default DeleteButton