import React, { useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, sub, addByValue } from "../ReduxHandling/Reducers/counterSlice";

const Counter = () => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const counter = useSelector((fetchedState) => {
    return fetchedState.counter.count;
  });
  return (
    <Fragment>
      <div>
        <h1>Counter: {counter}</h1>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(add());
          }}
        >
          Add ➕
        </button>
        <br></br>
        <button
          onClick={() => {
            dispatch(sub());
          }}
        >
          Sub ➖
        </button>
        <br></br>
      </div>
      <div>
        <input
          type="text"
          placeholder="Value"
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch(addByValue(Number(value)));
          }}
        >
          Add Amount ➕
        </button>
      </div>
    </Fragment>
  );
};

export default Counter;
