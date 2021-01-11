import thunk from 'redux-thunk';

import tableReducer from './reducers/table';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createDispatchHook, createSelectorHook } from 'react-redux';

const rootReducer = combineReducers<IRootState, TRootActions>({
  table: tableReducer,
  // the potential for more reducers in the furture
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// typed selector for autocompletion
export const useSelector = createSelectorHook<IRootState>();
export const useDispatch = createDispatchHook<IRootState, TRootActions>();

export default store;
