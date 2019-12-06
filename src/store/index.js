import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import studentR from './reducers/student';
import questionsR from './reducers/questions';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    studentR,
    questionsR
  }),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
