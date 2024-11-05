import SurveyHeader from "./SurveyHeader";
import { useState } from "react";
import './SurveyWrite.css';
import SurveyQuestion from "./SurveyQuestion";
import plusBtn from "../assets/plusBtn.png";
import { useNavigate } from 'react-router-dom';

const SurveyWrite = () => {
  const [questions, setQuestions] = useState([{ id: 1, title: '', options: [] }]);
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const navigate = useNavigate();

  const surveyAdd = () => {
    setQuestions([...questions, { id: questions.length + 1, title: '', options: [] }]);
  };

  const handleRegister = () => {
    const surveyData = {
      title,
      startDate,
      endDate,
      questions: questions.map(q => ({ title: q.title, options: q.options, type: q.type })),
    };
  
    const storedDataString = localStorage.getItem('surveyData');
    let storedData = [];
  
    if (storedDataString) {
      try {
        storedData = JSON.parse(storedDataString);
        if (!Array.isArray(storedData)) {
          console.error("storedData가 배열이 아닙니다:", storedData);
          storedData = []; 
        }
      } catch (error) {
        console.error("JSON 파싱 오류:", error);
        storedData = [];
      }
    }
  
    const updatedData = [...storedData, surveyData];

    localStorage.setItem('surveyData', JSON.stringify(updatedData));
  
    navigate('/');

    console.log(localStorage);
  };

  const updateQuestion = (index, title, options, type ) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = { ...updatedQuestions[index], title, options, type };
    setQuestions(updatedQuestions);
  };

  const deleteQuestion = (index) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
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
            updateQuestion={updateQuestion}
            deleteQuestion={deleteQuestion}
          />
        ))}
        <div id="plus" >
          <img src={plusBtn} onClick={surveyAdd} alt="plus button" />
        </div>
        <div id="register-btn-back">
          <button id="register-btn" onClick={handleRegister}>등록하기</button>
        </div>
      </div>
    </div>
  );
}

export default SurveyWrite;
