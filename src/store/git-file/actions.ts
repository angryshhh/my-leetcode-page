import {
  GitFileInfo,
  SET_FILE_LIST,
  SET_SHOWED_FILES_NUM,
  GitFileActionTypes
} from './type';

export const setFileList = (list: GitFileInfo[]): GitFileActionTypes => {
  return {
    type: SET_FILE_LIST,
    list,
  };
};

export const setShowedFilesNum = (num: number): GitFileActionTypes => {
  return {
    type: SET_SHOWED_FILES_NUM,
    num,
  };
};
