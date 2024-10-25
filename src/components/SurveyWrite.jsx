import SurveyHeader from "./SurveyHeader";
import './SurveyWrite.css'

function SurveyWrite() {

  return (
    <>
    <div id='survey-write-wrap'>
      <SurveyHeader text={"설문조사 등록"} button={""}/>
      <div id='survey-write-contents'>
        <div id='write-title'>
          <p>설문조사 제목</p>
          <input placeholder="제목을 입력해주세요" />
        </div>
        <div id='write-date'>
          <p>설문조사 기간</p>
          <div id='date-input'>
            <input type="date"/>
            ~
            <input type="date"/>
          </div>
        </div>
        <div id='survey-radio'>

        </div>
        <div id='add-option'>
          <button>옵션추가</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default SurveyWrite;

