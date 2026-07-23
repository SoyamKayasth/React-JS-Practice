import TicketNum from "./TicketNum";


export default function Ticket({ticket}){

    return(
        <div className="ticket">
            <p id="center">Ticket</p>
            <div className="nums">
           {ticket.map((num , idx) => 
            <TicketNum  key = {idx} num = {num}/>)}
            </div>
         
         </div>
    );
}