const TodoUpdate = ({todos, setTodos, input2, setInput2, currentIndex, setCurrentIndex}) => {

  const inputChange2 = (e) => {
    setInput2(e.target.value);
  };

  const updateTodo = () => {
    if (currentIndex !== null) {
      
      const newTodos = [...todos];
      newTodos[currentIndex] = input2
      setTodos(newTodos); 

      setInput2(''); 
      setCurrentIndex(null); 
    }
  };

  return (
    <>
      <div id="wrap-TodoUpdate" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <input value={input2} onChange={inputChange2} id='update-input'/>
        <button id='update-btn' onClick={updateTodo}>수정</button>
      </div>
    </>
  )
}
export default TodoUpdate;