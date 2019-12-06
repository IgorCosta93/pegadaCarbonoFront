import React from "react";
import Report from "./reportWrapper/Report";

export default function QuestionsWrapper({history, data}){
    let props = {
        history,
        data
    };

    return <Report props={props}/>
}