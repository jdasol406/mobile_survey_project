import SurveyHeader from "./SurveyHeader";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './SurveyList.css';

function SurveyList() {
  // test
  const navigate = useNavigate();
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    const initialSurveys = JSON.parse(localStorage.getItem('surveyData')) || [];
    if (Array.isArray(initialSurveys)) {
      setSurveys(initialSurveys);
    } else {
      setSurveys([]);
    }
  }, []);

  // husky testttt

  const handleSurveyClick = (survey) => {
    navigate('/SurveyDetails', { state: { survey } });
  };

  return (
    <>
      <div>
        <SurveyHeader text={"설문조사 목록"} />
        <div id="total-contents">
          전체 항목 수 : {surveys.length}개
        </div>
        <div id="surveyList">
          {surveys.length === 0 ? (
            <p id="empty-list">등록된 설문조사가 없습니다.</p>
          ) : (
            surveys.slice().reverse().map((survey, index) => (
              <div key={index} className="surveys" onClick={() => handleSurveyClick(survey)}>
                <div>
                  <p id="survey-index">{surveys.length - index}</p>
                </div>
                <div id="list-info">
                  <p>{survey.title}</p>
                  <p style={{ fontSize: "13px" }}>기간 : {survey.startDate} ~ {survey.endDate}</p>
                </div>
                <div id="go">
                  ﹥
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
