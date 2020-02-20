// declare types
export interface GitFileInfo {
  name: string;
  url: string;
};

export interface GitFileState {
  gitFileList: GitFileInfo[];
  showedFilesNum: number;
};

// GitFile actions constants & shape
export const SET_FILE_LIST = 'SET_FILE_LIST';
export const SET_SHOWED_FILES_NUM = 'SET_SHOWED_FILES_NUM';

interface SetFileListAction {
  type: typeof SET_FILE_LIST;
  list: GitFileInfo[];
}

interface SetShowedFilesNumAction {
  type: typeof SET_SHOWED_FILES_NUM;
  num: number;
}

export type GitFileActionTypes = SetFileListAction | SetShowedFilesNumAction;
