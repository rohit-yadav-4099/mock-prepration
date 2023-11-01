import { useDispatch, useSelector } from "react-redux";
import { add } from "./Slice/Slice";
import { sub } from "./Slice/Slice";
import { multiply } from "./Slice/Slice";
import { divide } from "./Slice/Slice";

function Ui(){
    const counterData = useSelector((state) => state.Data.val)
    const dispatch = useDispatch();
    const handleAdd = () => {
        dispatch(add())
    }

    const handleSub = () => {
        dispatch(sub())
    }

    const handleMulti = () =>{
        dispatch(multiply())
    }

    const handleDiv = () =>{
        dispatch(divide())
    }

    return (
        <>
            <h2>hello</h2>
            <h3>vlaue is {counterData}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleSub}>Sub</button>
            <button onClick={handleMulti}>MultiPly</button>
            <button onClick={handleDiv}>Divide</button>
        </>
    )
}

export default Ui;