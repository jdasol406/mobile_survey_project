import './Todo.css';

const Input = ({input, setInput}) => {
  const inputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <input value={input} onChange={inputChange} id='list-input' />
    </>
  )
} 

export default Input