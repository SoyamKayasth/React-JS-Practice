import "./App.css"
import { useState } from "react";

export default function Counter() {
    let [count, setState] = useState(0);

    function increment() {
        setState(count += 1);
        console.log(count);
    }

    return (
        <>
            <h5>Count is {count}</h5>
            <button className="counter" onClick={increment}>
                Increase
            </button>
        </>
    );
}