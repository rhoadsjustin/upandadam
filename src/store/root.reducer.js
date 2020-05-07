import {combineReducers} from 'redux';
import profileReducer from '../redux/profile/reducer';
import { reducer as formReducer } from 'redux-form';
export default combineReducers({
 profile: profileReducer,
 form: formReducer,
});