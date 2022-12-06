import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const test = useSelector(state => state.test)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      <h1>{test}</h1>
    </div>
  );
};

export default Home;
