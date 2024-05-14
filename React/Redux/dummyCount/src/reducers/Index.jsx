import changeTheNumber from "./UpDown";
import redux from 'react-redux'

export const combineReducers = redux.combineReducers;


const rootReducer = combineReducers({
    cake:changeTheNumber
});

export default rootReducer;