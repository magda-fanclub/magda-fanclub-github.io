import React, { useState } from 'react'
import magda1 from './assets/laughing_magda.png'
import magda2 from './assets/queen_magda.jpeg'
import magda3 from './assets/cheeky_magda.png'
import magda4 from './assets/judgy_magda.png'
import './App.css'

function App() {
  const [choice, setChoice] = useState(0)
  const magdas = [null, magda1, magda2, magda3, magda4]

  return (
    <div className="d-flex flex-column justify-content-center align-items-center h-100 bg-dark text-light">
      <h1 className="display-3">Magda is:</h1>
      <div>
        <button className="btn btn-outline-info mx-1" onClick={() => setChoice(1)}>A boss</button>
        <button className="btn btn-outline-success mx-1" onClick={() => setChoice(2)}>A queen</button>
        <button className="btn btn-outline-warning mx-1" onClick={() => setChoice(3)}>Not a boss</button>
        <button className="btn btn-outline-danger mx-1" onClick={() => setChoice(4)}>Not a queen</button>
      </div>
      {choice > 0 && <>
        <img src={magdas[choice]} className="magda mt-4 mb-3" height="200" width="200"/>
        <p class="lead text-center">{choice < 3 ? "Correct" : "Wrong"}</p>
      </>}
    </div>
  )
}

export default App
