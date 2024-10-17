import './Todo.css';

const BackButton = (props) => {
  const backBtn = () => {
    
    props.setInput(''); 
    props.setCurrentIndex(null); 

    props.updateBtnFunk("none");
  }

  return (
    <>
      <button id='back-btn' onClick={backBtn}> 🔙 </button>
    </>
  )
} 

export default BackButton