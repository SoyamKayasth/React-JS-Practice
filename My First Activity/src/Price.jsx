import "./Price.css";


export default function Price({oldPrice , newPrice}){


   return(
      <div className="price">
        <span className="old">{oldPrice}</span>
        &nbsp; &nbsp;
         <span className="new">{newPrice}</span>
      </div>

   );

}