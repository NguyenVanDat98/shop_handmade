import { userReduce } from "./userReducer/userReduce";

const { combineReducers } = require('redux');

const rootReducer = combineReducers({
    users: userReduce,
});

export default rootReducer;