import './Todo.css';

const RegisterButton = (props) => {
  console.log(props);
  const addTodo = (input, todos, setInput, setTodos, updateBtnFunk) => {
    // console.log(props.input);
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