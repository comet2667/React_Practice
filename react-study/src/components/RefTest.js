import { useEffect, useRef, useState } from "react";

export default function RefTest() {
    const [count, setCount] = useState(1);
    const renderingCount = useRef(1);
 
    console.log(`count : ${count}`)
    console.log(`render : ${renderingCount.current}`);

    useEffect(() => {
    //   console.log("renderingCount : ", renderingCount.current);
      ++renderingCount.current;
    });
  
    return (
      <div>
        <div>Count : {count}</div>
        <button onClick={() => setCount(count + 1)}> count up </button>
      </div>
    );
}