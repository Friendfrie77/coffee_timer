import React from 'react'

export default function Button(props) {
    const startButton = (
        <button className='btn btn-start' onClick={props.handleStart}>
            Start
        </button>
    );
    const ActiveButtons = (
        <div className='btn-group'>
            <button className='btn btn-start' onClick={props.handlePause}>
                {props.isPaused ? "Resume" : "Pause"}
            </button>
            <button className='btn btn-reset' onClick={props.handleReset}>
                Reset
            </button>
        </div>
    );
  return (
    <div className='timer-control'>
        <div>
            {/* {ActiveButtons} */}
            {props.isActive ? ActiveButtons : startButton}
        </div>
    </div>
  )
}
