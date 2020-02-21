import {
  CodeState,
  SET_CODE,
  CodeActionTypes,
} from './type';

const initialState: CodeState = {
  code: {
    url: '',
    name: '',
    content: '',
  },
  editing: false,
};

export const codeReducer = (
  state = initialState,
  action: CodeActionTypes
): CodeState => {
  switch (action.type) {
    case SET_CODE:
      return {
        ...state,
        code: action.code,
      };
    default:
      return state;
  }
};
