 import { createStore } from 'react-redux'

 import rootReducer from './reducers/Index';
const Store = createStore(rootReducer);

export default rootReducer;