import { useState } from "react";
import Ticket from "./Ticket";
import {genTicket , sum} from "./helper"
import "./Lottery.css"

export default function Lottery({n = 3 , winningSum = 15}){

    const [ticket , setTicket] = useState(genTicket(n));

    const buyTicket = () => {
          setTicket(genTicket(n));
    }

    const isWin = (num) => {
        return (sum(num) === winningSum)
    }

  return(
    <div id = "center">
        <Ticket ticket={ticket}/>
      <button type="button" className="btn" onClick = {buyTicket} >Buy Ticket</button>
      
       {isWin(ticket) && <h3 className="green">Congratulations! You Won!</h3>}
          
    </div>
  );

}