import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';

interface GitFile {
  name: string;
  url: string;
}

function App() {
  const [code, setCode] = useState('');
  const [fileList, setFileList] = useState(new Array<GitFile>());

  useEffect(() => {
    Axios
    .get('https://api.github.com/repos/angryshhh/my-leetcode/contents')
    .then(({data}) => {
      data.pop(); // remove README.md
      data.sort((a: GitFile, b: GitFile) => parseInt(a.name) - parseInt(b.name));
      setFileList(data);
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <ul>
        {
          fileList.map(gitFile => <li
            key={parseInt(gitFile.name)}
          >
            <button
              onClick={() => {
                Axios
                .get(gitFile.url)
                .then(({data}) => {
                  setCode(Buffer.from(data.content, data.encoding).toString());
                })
                .catch(err => console.log(err));
              }}
            >{gitFile.name}</button>
          </li>)
        }
      </ul>
      <p>
        {code}
      </p>
    </div>
  );
}

export default App;
