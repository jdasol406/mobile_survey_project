import { useState } from "react";

const TodoArray = ({ input, setInput, todos, setTodos }) => {
  const [input2, setInput2] = useState("");
  const [currentIndex, setCurrentIndex] = useState();

  const inputChange2 = (e) => {
    setInput2(e.target.value);
  };

  const updateFunk = (e) => {
    const trimmedText = e.currentTarget.textContent.trim();
    const editText = trimmedText.slice(0, -2);

    setInput2(editText);

    const todoIndex = e.currentTarget.dataset.index;
    setCurrentIndex(todoIndex);
  };

  const updateTodo = () => {
    if (currentIndex !== null) {
      const newTodos = [...todos];
      newTodos[currentIndex] = input2;
      setTodos(newTodos);

      setInput2("");
      setCurrentIndex(null);
    }
  };

  const deleteTodo = (index, e) => {
    e.stopPropagation();

    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);

    setInput("");
  };

  return (
    <>
      <div>
        <div id="list">
          <ul>
            {todos.map((todo, index) => (
              <li data-index={index} onClick={updateFunk} key={index}>
                {todo}
                <button id="delete-btn" onClick={(e) => deleteTodo(index, e)}>
                  삭제
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <input value={input2} onChange={inputChange2} id="update-input" />
          <button id="update-btn" onClick={updateTodo}>
            수정
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoArray;
