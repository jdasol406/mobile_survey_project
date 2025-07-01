import { useLocation } from 'react-router-dom';
import SurveyHeader from './SurveyHeader';
import './SurveyWrite.css'; // SurveyWrite의 스타일을 사용

const SurveyDetails = () => {
  const location = useLocation();
  const { survey } = location.state;

  return (
    <div id="survey-details-wrap">
      <SurveyHeader text={"설문조사 상세"} Button={""} />
      <div id="survey-details-contents">
        <div id="write-title">
          {/* husky test */}
          <p>설문조사 제목</p>
          <input type="text" value={survey.title} readOnly />
        </div>
        <div id="write-date">
          <p>설문조사 기간</p>
          <div id="date-input">
            <input type="text" value={`${survey.startDate}`} readOnly /> 
            ~
            <input type="text" value={`${survey.endDate}`} readOnly />
          </div>
        </div>
        {survey.questions.map((question, index) => (
          <div id="survey-write-list" key={index}>
            <div id="survey-question-wrap">
              <div id="survey-select">
                <div>
                  <input
                    id='survey-write'
                    type="text"
                    value={question.title}
                    readOnly
                  />
                  <select value={question.type} disabled>
                    <option value="radio">Radio button</option>
                    <option value="checkbox">Checkbox</option>
                  </select>
                </div>
                <div id='input-question'>
                  {question.options.map((option, idx) => (
                    <div id='question-radio' key={idx}>
                      <input id='radio' type={question.type} name={`option-${index}`} disabled />
                      <input
                        id='radio-input'
                        type="text"
                        value={option.value}
                        readOnly
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div id='survey-select-footer'>
                <div id='necessary-onoff'>
                  필수항목 &nbsp;
                  <div id='switch'>
                    <div id="switch-on-detail"> on </div>
                    <div id="switch-off-detail"> off </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SurveyDetails;
