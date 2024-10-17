import './Todo.css';

const DeleteButton = ({index, todos, setTodos, updateBtnFunk}) => {
  const deleteTodo = (index, e) => {
    e.stopPropagation();

    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);

    updateBtnFunk("none");
  };

  return (
    <>
      <button id='delete-btn' onClick={(e) => deleteTodo(index, e)}>삭제</button>
    </>
  )
} 

export default DeleteButton