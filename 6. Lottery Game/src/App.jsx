import Lottery from "./components/Lottery"
import "./App.css"
import { sum } from "./components/helper";

function App() {
 
const winCondition = (arr) => {
      return sum(arr) === 15; // Equal to digits's sum
      // return arr.every((num) => num === arr[0]); // Checks the all numbers is equal
   }

  return (
    <>
      <h1 id = "center">Lottery Game</h1>
      <Lottery n = {3} winCondition = {winCondition}/>
    </>
  )
}

export default App
