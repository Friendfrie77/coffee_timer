import React, {useEffect, useState} from 'react'
import Button from './button';
import Stopwatch from './Stopwatch';
import Coffeecup from './Coffeecup';
import cup from '../assets/coffee-cup.svg';
function Timer() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };
  
  useEffect(() =>{
    let interval = null;
    if (isActive && isPaused === false){
      interval = setInterval(() =>{
        setTime((time) => time + 10);
      }, 10)
    } else{
      clearInterval(interval);
    };
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused])
  const handlePause = () => {
    setIsPaused(!isPaused);
  };
  const handleReset = () => {
    setIsActive(false)
    setTime(0)
  }
  useEffect(()=>{
    if(time === 125000){
      handlePause()
    }
  }, [time])
  console.log(time)
  return (
    <div className='timerWrapper'>
      <Coffeecup
      timer = {time}
      isActive = {isActive}
      isPaused = {isPaused}
      handleStart = {handleStart}
      handlePause = {handlePause}
      handleReset = {handleReset}
      ></Coffeecup>
      {/* <div className='timerContainer'>
        <Stopwatch
          isActive = {isActive}
          timer = {time}
        />
        <Button
          isActive = {isActive}
          isPaused = {isPaused}
          handleStart = {handleStart}
          handlePause = {handlePause}
          handleReset = {handleReset}
        />
      </div> */}
    </div>
  )
}

export default Timer
