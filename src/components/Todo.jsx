import { useState, useRef } from 'react';
import './Todo.css';

function Todo() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(); // 현재 수정 중인 인덱스 상태 추가
  const updateButtonRef = useRef(); // 버튼 참조를 위한 ref 생성

  const inputChange = (e) => {
    setInput(e.target.value);
  };

  const updateBtnFunk = (displayStyle) => {
    if (updateButtonRef.current) {
      updateButtonRef.current.style.display = displayStyle; // display를 none으로 설정
    }
  }

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input]);
      setInput('');
    }

    updateBtnFunk("none");
  };

  const updateFunk = (e) => {
    // e.currentTarget으로 li 요소를 직접 참조해서 텍스트 가져오기
    const trimmedText = e.currentTarget.textContent.trim();
    // "삭제" 빼고 불러오려고 뒤 두글자 빼기
    const editText = trimmedText.slice(0, -2);

    setInput(editText);

    // update-btn의 display 스타일을 block으로 변경
    updateBtnFunk("block");

    // 클릭한 li의 인덱스를 가져와 currentIndex에 저장
    const todoIndex = e.currentTarget.dataset.index; // data-index 속성에서 인덱스 가져오기
    setCurrentIndex(todoIndex); // currentIndex 상태 업데이트
  };

  const updateTodo = () => {
    if (currentIndex !== null) {
      // 수정된 input으로 todos 상태 업데이트
      const newTodos = [...todos];
      newTodos[currentIndex] = input; // currentIndex에 해당하는 항목 수정
      setTodos(newTodos); // 상태 업데이트

      setInput(''); // input 필드 비우기
      setCurrentIndex(null); // currentIndex 초기화
    }

    updateBtnFunk("none");
  };

  const deleteTodo = (index, e) => {
    e.stopPropagation(); // 클릭 이벤트가 상위 요소로 전파되지 않도록 함
    
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  
    // 삭제 후 수정 버튼 숨기기
    setInput(''); // input 필드 비우기
    setCurrentIndex(null); // currentIndex 초기화

    updateBtnFunk("none");
  };

  const backBtn = () => {
    // 삭제 후 수정 버튼 숨기기
    setInput(''); // input 필드 비우기
    setCurrentIndex(null); // currentIndex 초기화

    updateBtnFunk("none");
  }
  

  return (
    <>
      <div>
        <h1>Todo List</h1>
      </div>
      <div id='todo-list'>
        <div id='write-div'>
          <input value={input} onChange={inputChange} id='list-input' />
          <button id='regiter-btn' onClick={addTodo}>등록</button>
          <button id='update-btn' onClick={updateTodo} ref={updateButtonRef}>수정</button> {/* 초기 상태를 none으로 설정 */}
        </div>
        <div id='list'>
          <ul>
            {todos.map((todo, index) => (
              <li data-index={index} onClick={updateFunk} key={index}>
                {todo}
                <button id='delete-btn' onClick={(e) => deleteTodo(index, e)}>삭제</button> {/* 이벤트 전파 막기 */}
              </li>
            ))}
          </ul>
        </div>
        <button id='back-btn' onClick={backBtn}> 🔙 </button>
      </div>
    </>
  );
}

export default Todo;
