import './Product.css';
import Price from './Price';

export default function Product({ title, desc, idx }) {

  let oldPrices = ["12,999", "11,990", "1,599", "8,599"];
  let newPrices = ["10,999", "10,200", "999", "7,999"];

  let description = [
    ["8000 DPI" , "5 programmable buttons"],
    ["Intuitive surface" , "light-weight"],
    ["Designed for iPad Pro" , "Best Performance"], ["Wireless Support" , "Fast Charging Support"]
  ];

  return (
    <div className="Product">
      <h3>{title}</h3>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}