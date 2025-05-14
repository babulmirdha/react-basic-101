import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [count, setCount] = useState(0);

  const [reset, setReset] = useState(0)

  useEffect(() => {
    return (alert("Hello"))
  }, [reset]);

  return (
    <div>
<h1>Timer: {count}</h1>

<button onClick={()=>{
    setReset((prev)=>prev+1)
}}>
    Reset
</button>
    </div>
  
);
}



