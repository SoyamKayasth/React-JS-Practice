 import { useState } from "react";
  import "./Lottery.css"
export default function Lottery(){
    const [randNum , setRandNum] = useState(0);

    const getRandNum = () => {
      setRandNum(Math.floor(Math.random()*1000) + 1);
    }

    const isWin = (num) => {
        return (num
        .toString()
        .split("")
        .reduce((acc , curr) => acc + parseInt(curr) , 0) === 15) 
    }

  return(
    <div id = "center">
      <p>Lottery Ticket = {randNum}</p>
      <button type="button" onClick = {getRandNum} >Get Ticket</button>
      
       {isWin(randNum) ? <p className="green">Congratulations! You Won!</p>
       : null}
          
    </div>
  );

}