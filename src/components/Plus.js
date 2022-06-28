import React from 'react';
import { useState,useCallback } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  const plus = useCallback(()=>{
    setValue(value+1);
  },[value]) //디펜던시(value)의 값이 바뀔때만 함수가 리랜더링됨

  const resetPlus = useCallback(() =>{
    setValue(0);
  },[])
    return (
        <div>
        <h1> 값 : {value}</h1>
        <button onClick={plus}>
          plus + 
        </button>
        <button onClick={resetPlus}>
          reset
        </button>
      </div>
    );
};

export default Counter;