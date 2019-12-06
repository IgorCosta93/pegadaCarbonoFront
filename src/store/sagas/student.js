import { put, call } from 'redux-saga/effects';

function apiAdd(body){
    return body.addStudent({
        variables:{ 
            name: body.student.name,
            email: body.student.email,
            ra: body.student.ra
        }
    }).then((result) => {
        localStorage.setItem('@pegadaCarbono:userID', result.data.addStudent._id);
        localStorage.setItem('@pegadaCarbono:name', result.data.addStudent.name);
    });
}
  
export function* addStudent(action){
    try{
        const response = yield call(apiAdd, action.body);
        yield put({ type: "SUCCESS_ADD_STUDENT", payload: { data: response } });
    }catch(err){
        yield put({ type: "FAILURE_ADD_STUDENT" })
    }
}