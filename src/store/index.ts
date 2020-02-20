import { combineReducers } from 'redux';
import { useSelector, TypedUseSelectorHook } from 'react-redux';

import { gitFileReducer } from './git-file/reducers';

export const rootReducer = combineReducers({
  gitFile: gitFileReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
