import React from "react";
import Home from "./homeWrapper/Home";

export default function HomeWrapper({history, ADD_STUDENT}){
    let props = {
        history,
        ADD_STUDENT
    };

    return <Home props={props}/>
}