import React, { useState } from "react";
import Title from "./Title";
const Usestate=(props)=>{
    const [count,setCount]=useState(0)
   

    
    return (<div className="Usestate">
        <Title
        title="hookUsestate"
        subtitle="estado em componentes funcionais">
            <span>{count}</span>
            <div>
            <button className="btn">-1</button>
            <button className="btn">+1</button>
            </div>

        </Title>
    </div>)
}

export default Usestate
