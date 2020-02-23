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
    .catch(err => console.log('file list wrong' + err));
  }, [dispatch]);

  return (
    <div className="App">
      <Sider />
      <Content />
    </div>
  );
}

export default App;
