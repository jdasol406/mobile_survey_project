import './Todo.css';

const RegisterButton = ({ input, todos, setInput, setTodos, updateBtnFunk }) => {
  
  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input]);  // todos 배열에 새로운 항목 추가
      setInput('');  // input 필드 초기화
    }

    updateBtnFunk("none");  // 버튼 숨기기
  };
  
  return (
    <>
      <button id='regiter-btn' onClick={addTodo}>등록</button> {/* addTodo 함수를 바로 사용 */}
    </>
  );
};

export default RegisterButton;
