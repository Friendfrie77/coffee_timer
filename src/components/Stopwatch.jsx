import React, {useState, useEffect} from 'react'

function Stopwatch(props) {
    const [coffeWeight, setCoffeeWeight] = useState(0);
    const [waterDose, setWaterDose] = useState(0);
    const [msg, setMsg] = useState('test')
    const min = 60000;
    const sec = 1000;
    const coffeeTiming = {
        stepOne: `Pour Bloom of ${waterDose}g in 10s`,
        stepTwo: `Pour ${waterDose}g in 15s for a total of ${waterDose * 2}g`,
        stepThree: `Pour ${waterDose}g in 10s for a total of ${waterDose * 3}g`,
        stepFour: `Pour ${waterDose}g in 10s for a total of ${waterDose * 4}g`,
        stepFive: `Pour ${waterDose}g in 10s for a total of ${waterDose * 5}g`,
        stepSix: 'Gently swirl'
    }
    const handleCoffeeChange = (event) =>{
        console.log(event.target.value)
        setCoffeeWeight(event.target.value)
    }
    useEffect(() =>{
        setWaterDose(Math.round((coffeWeight * 16.66)/5))
    },[coffeWeight, waterDose])
    useEffect(() =>{
        switch (props.timer){
            default:
                setMsg('Pause')
            case 0:
                if(props.timer >= 0 && props.timer <= 10000){
                    setMsg(coffeeTiming.stepOne)
                    break
                }
            case 1:
                if((props.timer >= 10000 && props.timer <= 15000) || (props.timer > 120000 && props.timer <= 125000)){
                    setMsg(coffeeTiming.stepSix)
                }
            case 2:
                if(props.timer >= 45000 && props.timer <= 60000){
                    setMsg(coffeeTiming.stepTwo)
                    break;
                }
            case 3:
                if(props.timer >= 70000 && props.timer <= 80000){
                    setMsg(coffeeTiming.stepThree)
                    break;
                }
            case 4:
                if(props.timer >= 90000 && props.timer <= 100000){
                    setMsg(coffeeTiming.stepFour)
                    break;
                }
            case 5:
                if(props.timer >= 110000 && props.timer <= 120000){
                    setMsg(coffeeTiming.stepFive)
                    break
                }
            case 6:
                if(props.timer >= 125000){
                    setMsg('Enjoy!')
                }
        }
    }, [props.timer])
    const timer = (
            <div className='stopwatch'>
                <div className='digit-container'>
                    <span className='digit'>{("0" + (Math.floor((props.timer / min) % 60))).slice(-2)}:</span>
                    <span className='digit'>{("0" + (Math.floor((props.timer / sec) % 60))).slice(-2)}</span>
                </div>
                <div className='msg-container'>
                    {msg}
                </div>
            </div>
    )
    const userInput = (
        <div className='coffee-input'>
            <input name='coffee' onChange={handleCoffeeChange}></input>
            <span>Total water needed: {waterDose * 5}g</span>
        </div>
    )
  return (
    <div className='stopwatch-container'>
            {props.isActive ? timer : userInput}
    </div>
  )
}

export default Stopwatch
