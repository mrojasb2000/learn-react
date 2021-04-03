import React from "react"
import FirstComp from "../FirstComp/FirstComp";

const Welcome = (props) => {
    return <h3>Hello, {props.name}</h3>;
}

const ItWorks = () => {
    return (
        <>
        <Welcome name="Mavro" />
        <h1>It works!</h1>
        <FirstComp />
        </>
    )
}

export default ItWorks