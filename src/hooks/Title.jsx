import React from 'react'
import UseState from './Usestate'


const Title = props => (
    <div className="Title">
         <div className={`PageTitle ${props.error ? "error" : ""}`}>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        <h3>{props.title}</h3>
    </div>



    
    </div>
)

export default Title