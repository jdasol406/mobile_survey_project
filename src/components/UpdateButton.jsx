import './Todo.css';

const UpdateButton = ({input, todos, setTodos, setInput, updateButtonRef, currentIndex, setCurrentIndex,updateBtnFunk}) => {
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

  return (
    <>
      <button id='update-btn' onClick={updateTodo} ref={updateButtonRef}>수정</button>
    </>
  )
} 

export default UpdateButton