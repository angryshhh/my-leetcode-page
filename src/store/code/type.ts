export interface Code {
  url: string;
  content: string;
  name: string;
}

export interface CodeState {
  code: Code;
  editing: boolean;
}

export const SET_CODE = 'SET_CODE';

export interface SetCodeAction {
  type: typeof SET_CODE;
  code: Code;
}

export type CodeActionTypes = SetCodeAction;
