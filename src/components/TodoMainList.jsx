const TodoMainList = ({setInput2, todos, setTodos, setCurrentIndex}) => {

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

    setInput2("");
  };

  return (
    <>
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
    </>
  )
}
export default TodoMainList;