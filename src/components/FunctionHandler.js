import { useState } from "react";

const FunctionHandler = () => {
    const [i, setI] = useState(0);

    const clickHandler = () => {
        console.log('clicked ' + { i })
        setI(i + 1);
    };
    return <button onClick={clickHandler}>Click here { i}</button>
}

export default FunctionHandler;