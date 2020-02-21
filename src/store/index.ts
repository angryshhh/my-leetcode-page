import { combineReducers } from 'redux';
import { useSelector, TypedUseSelectorHook } from 'react-redux';

import { gitFileReducer } from './git-file/reducers';
import { codeReducer } from './code/reducers';

export const rootReducer = combineReducers({
  gitFile: gitFileReducer,
  codeState: codeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
