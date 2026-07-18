import { useState } from 'react'
import './App.css'
import LikeBtn from "./LikeBtn"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <LikeBtn></LikeBtn>
    </>
  )
}

export default App
