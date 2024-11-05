import { useState } from 'react';
import './SurveyWrite.css';

const SurveyQuestion = ({ question, index, updateQuestion, deleteQuestion }) => {
  const initialOptions = question.options.length > 0 ? question.options : [{ id: 1, value: '' }];
  const [options, setOptions] = useState(initialOptions);
  const [surveyQuestionTitle, setSurveyQuestionTitle] = useState(question.title || '');
  const [questionType, setQuestionType] = useState(question.type || 'radio');
  const [isRequired, setIsRequired] = useState(true);
  const [isOn, setIsOn] = useState(true); 

  const addOption = () => {
    setOptions([...options, { id: options.length + 1, value: ''}]);
  };

  const handleInputChange = (id, event) => {
    const newOptions = options.map(option =>
      option.id === id ? { ...option, value: event.target.value } : option
    );
    setOptions(newOptions);
    updateQuestion(index, surveyQuestionTitle, newOptions, questionType);
  };

  const handleTitleChange = (e) => {
    setSurveyQuestionTitle(e.target.value);
    updateQuestion(index, e.target.value, options, questionType);
  };

  const radioOrCheckbox = (e) => {
    const newType = e.target.value;
    setQuestionType(newType);
    updateQuestion(index, surveyQuestionTitle, options, newType);
  }

  const toggleSwitch = () => {
    setIsOn((prev) => !prev);
  };


  return (
    <div id='survey-write-list'>
      <div id="survey-question-wrap">
        <div id="survey-select">
          <div>
            <input
              id='survey-write'
              value={surveyQuestionTitle}
              onChange={handleTitleChange}
              placeholder='설문조사 질문 입력'
            />
            <select onChange={radioOrCheckbox}>
              <option value="radio">Radio button</option>
              <option value="checkbox">Checkbox</option>
            </select>
          </div>
          <div id='input-question'>
            {options.map((option) => (
              <div id='question-radio' key={option.id}>
                <input id='radio' type={questionType} name={`option-${index}`} />
                <input
                  id='radio-input'
                  type="text"
                  placeholder="옵션명을 입력해주세요"
                  value={option.value}
                  onChange={(e) => handleInputChange(option.id, e)}
                />
              </div>
            ))}
          </div>
          <div id="add-option">
            <button onClick={addOption}>옵션 추가</button>
          </div>
        </div>
        <div id='survey-select-footer'>
        {index > 0 && (
            <button id="survey-question-delete-btn" onClick={() => deleteQuestion(index)}>삭제</button>
          )}
          <div id='necessary-onoff'>
            필수항목 &nbsp;
            <div id='switch'>
              <div
                id="switch-on"
                onClick={toggleSwitch}
                className={isOn ? 'active' : ''}
              >
                on
              </div>
              <div
                id="switch-off"
                onClick={toggleSwitch}
                className={!isOn ? 'active' : ''}
              >
                off
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyQuestion;
