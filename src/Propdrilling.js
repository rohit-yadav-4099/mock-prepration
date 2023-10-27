import react, { useState } from "react";
import ChildProp from "./Propdrilling2";

function Parent3(){
    const [nameData, setnameData] = useState('')
    const getFunction = (data) => {
        setnameData(nameData)
    }
    return(
        <>
        <h3>{nameData}</h3>
        <h1> This is parent page.</h1>
        <ChildProp getData={getFunction}/>
        </>
    )
}

export default Parent3;