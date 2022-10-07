import createSagaMiddleware from "@redux-saga/core"
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import { mySaga } from "./saga/rootSaga";
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk, sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
sagaMiddleware.run(mySaga);

export default store;
