import React, { useEffect, useState } from "react";

function UseEffects(){
    const[mouse,setmouse] = useState({x:0,y:0});
    const mouseMoving = (e) => {
        setmouse({
            x: e.clientX,
            y: e.clientY
        })
    }
    useEffect(() => {
        window.addEventListener('mousemove',mouseMoving)
    },{})
    return(
        <>
      <span>x:{mouse.x}, y:{mouse.y}</span>
        </>
    )
}
export default UseEffects;
