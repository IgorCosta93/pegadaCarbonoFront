import { takeLatest } from 'redux-saga/effects';
import { addStudent } from "./sagas/student";
import { addQuestions } from "./sagas/questions";

export default function* root() {
  yield [
    takeLatest('ADD_STUDENT', addStudent),
    takeLatest('ADD_QUESTIONS', addQuestions),
  ];
}
