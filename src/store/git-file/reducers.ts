import {
  GitFileState,
  SET_FILE_LIST,
  SET_SHOWED_FILES_NUM,
  GitFileActionTypes,
} from './type';

const initialState: GitFileState = {
  gitFileList: [],
  showedFilesNum: 10,
};

export const gitFileReducer = (
  state = initialState,
  action: GitFileActionTypes
): GitFileState => {
  switch (action.type) {
    case SET_FILE_LIST:
      let { list } = action;
      list.sort((a, b) => parseInt(a.name) - parseInt(b.name));
      return {
        ...state,
        gitFileList: list,
      };
    case SET_SHOWED_FILES_NUM:
      return {
        ...state,
        showedFilesNum: action.num,
      };
    default:
      return state;
  }
};
