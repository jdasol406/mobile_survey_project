import './Todo.css';

const RegisterButton = (props) => {
  
  const addTodo = () => {
    
    if (props.input.trim() !== '') {
      props.setTodos([...props.todos, props.input]);
      props.setInput('');
    }

    props.updateBtnFunk("none");
  };
  

  return (
    <>
      <button id='regiter-btn' onClick={addTodo}>등록</button>
    </>
  )
} 

export default RegisterButton