import { combineReducers } from "redux";
import loader from './loader';
import app from './app';

export default combineReducers({
    app,
    loader,
});
