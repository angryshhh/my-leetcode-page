import React, { useEffect } from 'react';
import { useTypedSelector } from '../store';
import hljs from 'highlight.js';
import 'highlight.js/styles/dracula.css';
// import 'highlight.js/styles/solarized-dark.css';
// import 'highlight.js/styles/tomorrow-night-blue.css';
import './CodeArea.css';

const CodeArea = () => {
  const codeState = useTypedSelector(state => state.codeState);

  useEffect(() => {
    document.querySelectorAll('pre code').forEach(block => {
      console.log(codeState.code.content)
      hljs.highlightBlock(block);
    });
  });
  
  
  
  return <div className="CodeArea">
    <pre>
      <code className="javascript">
        {codeState.code.content}
      </code>
    </pre>
  </div>;
};

export default CodeArea;
