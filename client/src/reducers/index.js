import { combineReducers } from 'redux';
import SectionsReducer from './sections';

const rootReducer = combineReducers({
  sections : SectionsReducer
});

export default rootReducer;