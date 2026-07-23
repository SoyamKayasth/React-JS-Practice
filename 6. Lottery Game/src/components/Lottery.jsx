import { useState } from "react";
import Ticket from "./Ticket";
import {genTicket , sum} from "./helper"
import Button from "./Button";
import "./Lottery.css"

export default function Lottery({n = 3 , winCondition}){

    const [ticket , setTicket] = useState(genTicket(n));

    const buyTicket = () => {
          setTicket(genTicket(n));
    }

    const isWin = (num) => {
        return winCondition(num);
    }

  return(
    <div id = "center">
        <Ticket ticket={ticket}/>
     
     <Button action={buyTicket}></Button> 
       {isWin(ticket) && <h3 className="green">Congratulations! You Won!</h3>}
          
    </div>
  );

}