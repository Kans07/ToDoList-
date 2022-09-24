import React from "react";
import {useState} from "react"

function Heading(props){
    const [Heading, setHeading] = useState("by Nobody")
    const HeadingChange=()=>{
        setHeading(props.Heading);
    }
    return (
        <>
            <h3>{Heading}</h3>
            <button onClick={HeadingChange}>Change by liner</button>
        </>
    )
}

export default Heading;