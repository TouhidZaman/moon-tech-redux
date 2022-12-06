import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT } from "../redux/actionTypes";

const Home = () => {
  const { counter } = useSelector(state => state)
  const dispatch = useDispatch();

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      <h1>Counter: { counter }</h1>
      <button onClick={() => dispatch({type: INCREMENT})}>Increment</button>
      <button onClick={() => dispatch({type: DECREMENT})}>Decrement</button>
    </div>
  );
};

export default Home;
