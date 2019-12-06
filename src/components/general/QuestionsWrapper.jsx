import React from "react";
import Questions from "./questionsWrapper/Questions";

export default function QuestionsWrapper({history, ADD_QUESTIONS}){
    let props = {
        history,
        ADD_QUESTIONS
    };

    return <Questions props={props}/>
}