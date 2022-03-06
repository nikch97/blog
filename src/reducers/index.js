import { combineReducers } from 'redux';

import { register, login, update } from './user.reducer';
import { save, retrieve, update as change } from './article.reducer';

const rootReducer = combineReducers({
   register,
   login,
   update,
   save,
   retrieve,
   change
});

export default rootReducer;