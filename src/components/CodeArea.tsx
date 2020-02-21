import React from 'react';
import { useTypedSelector } from '../store';
import './CodeArea.css';

const CodeArea = () => {
  const codeState = useTypedSelector(state => state.codeState);

  return <div className="CodeArea">
    <pre>{codeState.code.content}</pre>
  </div>;
};

export default CodeArea;
