import './ConfirmPopup.css';

// popup 

function ConfirmPopup({ onConfirm, onCancel, message }) {
  return (
    <div id='popup-overlay'>
      <div id='popup-content'>
        <p>{message}</p>
        <div id='popup-button'>
          <button id='no-btn' onClick={onCancel}>아니요</button>
          <button onClick={onConfirm}>네</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmPopup;
