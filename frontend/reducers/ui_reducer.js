import { combineReducers } from 'redux';

import modalReducer from './modal_reducer';
import playbarReducer from './playbar_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  playbar: playbarReducer
});

export default uiReducer;
