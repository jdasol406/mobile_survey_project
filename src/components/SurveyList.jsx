import SurveyHeader from "./SurveyHeader";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './SurveyList.css';

function SurveyList() {
  const navigate = useNavigate();
  const [surveys, setSurveys] = useState([]);

  // 컴포넌트 초기 렌더링 시 localStorage 데이터를 불러와서 상태를 설정
  useEffect(() => {
    const initialSurveys = JSON.parse(localStorage.getItem('surveyData')) || [];
    if (Array.isArray(initialSurveys)) {
      setSurveys(initialSurveys);
    } else {
      setSurveys([]); // 초기값이 배열이 아닐 경우 빈 배열로 설정
    }
  }, []);

  const handleSurveyClick = (survey) => {
    navigate('/SurveyDetails', { state: { survey } }); // 선택한 설문조사 데이터 전달
  };

  return (
    <>
      <div>
        <SurveyHeader text={"설문조사 목록"} />
        <div id="surveyList">
          {surveys.length === 0 ? (
            <p id="empty-list">등록된 설문조사가 없습니다.</p>
          ) : (
            surveys.map((survey, index) => (
              <div key={index} className="surveys" onClick={() => handleSurveyClick(survey)}>
                <div>
                  <p id="survey-index">{index + 1}</p>
                </div>
                <div>
                  <p>{survey.title}</p>
                  <p style={{ fontSize: "13px" }}>기간 : {survey.startDate} ~ {survey.endDate}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default SurveyList;
