import './SurveyHeader.css';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import ConfirmPopup from "./ConfirmPopup";

function SurveyHeader({ text }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleBackClick = (e) => {
    if (location.pathname === "/SurveyWrite") {
      e.preventDefault();
      setShowPopup(true);
    }
  };

  const handleConfirm = () => {
    setShowPopup(false);
    navigate('/');
  };

  const handleCancel = () => {
    setShowPopup(false);
  };

  return (
    <div id='survey-header-wrap'>
      <div id='survey-list-header'>
        <p>{text}</p>
      </div>
      {text === "설문조사 목록" ? (
        <Link to='/SurveyWrite'>
          <button id='new-survey'>신규</button>
        </Link>
      ) : (
        <Link to='/' onClick={handleBackClick}>
          <button id='back-btn'> ← </button>
        </Link>
      )}
      {showPopup && (
        <ConfirmPopup 
          message="작성 중인 설문조사가 있습니다. 취소하시겠습니까?" 
          onConfirm={handleConfirm} 
          onCancel={handleCancel} 
        />
      )}
    </div>
  );
}

export default SurveyHeader;
