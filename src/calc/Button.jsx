import React from "react"


export default props => {
    let classes=`Button`
    classes+=props.operation ?`operation`:``
    return(
        <button onClick={e =>props.click&&props.click(e.target.innerHTML)} 
        className={classes}>
            
        {props.label}
        </button>
    )
    }
    


