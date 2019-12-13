import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
/*import errorReducer from './errorReducer';
import profileReducer from './profileReducer';
import postReducer from './postReducer';*/

export default combineReducers({
    alert,
    auth
});