import './Todo.css';

const Input = ({input, setInput}) => {

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <div>
        <input value={input} onChange={onChangeHandler} id='list-input' />
      </div>
    </>
  )
}

export default Input