import React from 'react'

const Title = props => (
    <div className={`Title ${props.error ? "error" : ""}`}>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>



        <h3>{props.Title}</h3>
    </div>


)

export default Title