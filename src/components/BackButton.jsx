import './Todo.css';

const BackButton = ({setInput, setCurrentIndex, updateBtnFunk}) => {
  const backBtn = () => {
    
    setInput(''); 
    setCurrentIndex(null); 

    updateBtnFunk("none");
  }

  return (
    <>
      <button id='back-btn' onClick={backBtn}> 🔙 </button>
    </>
  )
} 

export default BackButton