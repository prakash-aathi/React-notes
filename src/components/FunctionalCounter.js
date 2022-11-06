import { useState } from "react";

//  use state hook
const FunctionalCounter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <p>{ count }</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default FunctionalCounter;