import SurveyHeader from "./SurveyHeader";
import { useState } from "react";
import './SurveyWrite.css';
import SurveyQuestion from "./SurveyQuestion";
import plusBtn from "../assets/plusBtn.png";
import { useNavigate } from 'react-router-dom';

const SurveyWrite = () => {
  const [questions, setQuestions] = useState([{ id: 1, title: '', options: [] }]); // 초기값 추가
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 페이지 이동

  const surveyAdd = () => {
    setQuestions([...questions, { id: questions.length + 1, title: '', options: [] }]);
  };

  const handleRegister = () => {
    const surveyData = {
      title,
      startDate,
      endDate,
      questions: questions.map(q => ({ title: q.title, options: q.options })),
    };
  
    // localStorage에서 데이터 가져오기
    const storedDataString = localStorage.getItem('surveyData');
    let storedData = [];
  
    // storedData가 null이 아니고 JSON 파싱이 가능하면 배열로 변환
    if (storedDataString) {
      try {
        storedData = JSON.parse(storedDataString);
        if (!Array.isArray(storedData)) {
          console.error("storedData가 배열이 아닙니다:", storedData); // 디버깅: storedData 출력
          storedData = []; // 배열이 아니면 빈 배열로 초기화
        }
      } catch (error) {
        console.error("JSON 파싱 오류:", error); // 디버깅: JSON 파싱 오류
        storedData = []; // JSON 파싱에 실패하면 빈 배열로 초기화
      }
    }
  
    // 새로운 데이터 저장
    const updatedData = [...storedData, surveyData];
  
    // 로컬스토리지에 업데이트된 데이터 저장
    localStorage.setItem('surveyData', JSON.stringify(updatedData));
  
    // 페이지 이동
    navigate('/');
  };

  return (
    <div id="survey-write-wrap">
      <SurveyHeader text={"설문조사 등록"} />
      <div id="survey-write-contents">
        <div id="write-title">
          <p>설문조사 제목</p>
          <input 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="제목을 입력해주세요" 
          />
        </div>
        <div id="write-date">
          <p>설문조사 기간</p>
          <div id="date-input">
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            ~
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          </div>
        </div>
        {questions.map((question, index) => (
          <SurveyQuestion 
            key={index} 
            question={question} 
            index={index} 
            updateQuestion={(index, title, options) => {
              const updatedQuestions = [...questions];
              updatedQuestions[index] = { ...updatedQuestions[index], title, options };
              setQuestions(updatedQuestions);
            }} // 질문 업데이트 함수
          />
        ))}
        <div id="plus" onClick={surveyAdd} style={{ cursor: "pointer" }}>
          <img src={plusBtn} alt="plus button" />
        </div>
        <div id="register-btn-back">
          <button id="register-btn" onClick={handleRegister}>등록하기</button>
        </div>
      </div>
    </div>
  );
}

export default SurveyWrite;
