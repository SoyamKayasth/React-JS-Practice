import Product from "./Product";
import './Tab.css';

function ProductTab(){
  return(
    <>
       <h2 style={{textAlign : "center"}}>Blockbuster Deals | Shop Now!</h2>
    <div className = "tab">
     <Product title = "Zebronics Y-500" idx={0}/>
       <Product title = "Logitech MX Master" idx={1}/>
     <Product title = "Apple pencil (2nd Gen)" idx={2}/>
           <Product title = "Petronics toad 23" idx={3}/>

  </div>
  </>
  );

}


export default ProductTab;