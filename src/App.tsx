import React, { useEffect } from 'react';
import Sider from './layouts/Sider';
import Content from './layouts/Content';
import Axios from 'axios';
import './App.css';
import { useDispatch } from 'react-redux';
import { setFileList} from './store/git-file/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    Axios
    .get('https://api.github.com/repos/angryshhh/my-leetcode/contents')
    .then(({data}) => {
      data.pop(); // remove README.md
      dispatch(setFileList(data));
    })
    .catch(err => console.log(err));
  }, [dispatch]);

  return (
    <div className="App">
      <Sider />
      <Content />
      {/* <ul>
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
      <code>
        <pre>{code}</pre>
      </code> */}
      {/* <pre style={{ backgroundColor: '#292d3e', color: 'white' }}>{code}</pre>
      <code style={{ backgroundColor: '#292d3e', color: 'white' }}>{code}</code>
      <pre>
        <code style={{ backgroundColor: '#292d3e', color: 'white' }}>{code}</code>
      </pre> */}
    </div>
  );
}

export default App;
