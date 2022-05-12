import React from "react";
import { useDispatch } from "react-redux";

function Counter() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch({ type: "COUTER.INCREMENT" })}>+</button>
      <span>0</span>
      <button>-</button>
    </div>
  );
}

export default Counter;
