import react, { useState } from "react";

function ChildProp(props){
    const [name, setname] = useState('')
    const handleSubmit = () =>{
        props.getData(name)
    }
    return(
        <>
        <h2>This is child Page</h2>
        <label>NAme:</label>
        <input type="text" name="name" onChange={(e) => setname(props.getData)}></input>
        <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default ChildProp;