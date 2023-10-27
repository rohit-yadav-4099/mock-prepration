import React, { useState } from "react";

function UseStates(){
    const [count, setCount] = useState(0)
    return(
        <>
        <h1>Add: {count + 1}</h1>
        <button onClick={setCount}>Add</button>
        </>
    )
}

export default UseStates;