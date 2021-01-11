import thunk from 'redux-thunk';

import tableReducer from './reducers/table';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers<IRootState, TRootActions>({
  table: tableReducer,
  // the potential for more reducers in the furture
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
