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
      hljs.highlightBlock(block);
    });
  });
  
  return <div className="CodeArea">
    {
      codeState.code.content ?
      <pre>
        <code className="Indexes">
          {codeState.code.content.split('\n').map((line, index) => index + 1).join('\n')}
        </code>
        <code className="CodeLines javascript">
          {codeState.code.content}
        </code>
      </pre> :
      null
    }
  </div>;
};

export default CodeArea;
