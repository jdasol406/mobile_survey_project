import { useState, useEffect } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);

  const btnClick = () => {
    setCount(count+1);
  }
  
  useEffect(() => {
    console.log('react useEffect');

    return (
      
    )
  }, []);

  console.log('react console');
  return (
    <>
      <div>
        {count}
        <div>
          <button onClick={btnClick}>+</button>
        </div>
      </div>
    </>
  );
}

export default UseEffect;