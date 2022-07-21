import { useState } from 'react'
import react from './assets/static/icon.png'
import kiwi from './assets/static/kiwi.svg'

const App = () => {
  const [counter, setCounter] = useState<number>(0)
  const name = 'sahbi'
  return (
    <div>
      <img width={200} src={react} alt="react" />
      <img width={200} src={kiwi} alt="kiwi" />
      <h1>{process.env.NODE_ENV}!!z</h1>
      <h1>{name}!!</h1>
      <h1>{process.env.CC}</h1>
      <button onClick={() => setCounter((p) => p + 1)}> {counter} </button>
    </div>
  )
}

export default App
