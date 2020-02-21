import {
  Code,
  SET_CODE,
  CodeActionTypes,
} from './type';

export const setCode = (code : Code): CodeActionTypes => {
  return {
    type: SET_CODE,
    code,
  };
};
