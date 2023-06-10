import { useState } from 'react';
import Timer from './components/timer';
import Button from './components/button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Timer></Timer>
    </>
  )
}

export default App
