import React, { useState } from 'react';
const CardNumber = () => {
const [number , setNumber] = useState(0);
const increaseN= () => { 
    setNumber(number +1 );
};
const decreaseN= () => {
    if (number > 0)
        {
            setNumber(number - 1);
        }
};
return(
  <div className='h-screen  justify-center  mx-auto mt-3 rounded-xl bg-white shadow-md bg-clip-border w-96'>
   <div className=" mx-4 bg-center shadow-lg rounded-lg ">
    <img
      src="https://img.freepik.com/free-vector/gradient-numerology-background_23-2150066807.jpg"
      />
      <p className='text-center text-xl font-medium text-gray-900 dark:text-black'> {number} </p>
  </div>
        <button className='mt-40 inline-block bg-blue-200 rounded-lg px-8 py-5 text-lg font-semibold text-white-700 mx-20  mb-2' onClick ={increaseN}> + </button>
        <button className='inline-block bg-blue-200 rounded-lg px-8 py-5 text-lg font-semibold text-white-700  mr-2 mb-2' onClick ={decreaseN}> - </button>
        <p className='  text-center ml-10 text-xl font-medium text-gray-900 dark:text-black'> Made by Kenzy</p>

    </div>
);
};
export default CardNumber;