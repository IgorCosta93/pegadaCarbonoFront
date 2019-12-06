import { put, call } from 'redux-saga/effects';

function apiAdd(body){
    return body.addQuestions({
        variables:{ 
            question1: body.form.question1,
            question2: body.form.question2,
            question3: body.form.question3,
            question4: body.form.question4,
            question5: body.form.question5,
            question6: body.form.question6,
            question7: body.form.question7,
            total: body.form.total,
            trees: body.form.trees,
            user: localStorage.getItem('@pegadaCarbono:userID')
        }
    })
}
  
export function* addQuestions(action){
    try{
        const response = yield call(apiAdd, action.body);
        yield put({ type: "SUCCESS_ADD_STUDENT", payload: { data: response } });
    }catch(err){
        yield put({ type: "FAILURE_ADD_STUDENT" })
    }
}