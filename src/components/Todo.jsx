import { useState } from 'react'

function Todo() {
  const [count, setCount] = useState(0);
  
  const onClickBtn = () => {
    setCount((prev)=> prev + 1);
  }

  return (
    <>
      <div>
        <h1>Todo list</h1>
      </div>
      <div>
        {count}
        <button onClick={onClickBtn}>+</button>
      </div>
    </>
  )
}
//
export default Todo