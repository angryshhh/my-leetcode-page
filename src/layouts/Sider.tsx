import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../store';
import { setShowedFilesNum } from '../store/git-file/actions';
import FileItem from '../components/FileItem';
import './Sider.css';

const Sider: React.FC = () => {
  const gitFileState = useTypedSelector(state => state.gitFileState);
  const dispatch = useDispatch();

  return <div className="Sider">
    {
      gitFileState.gitFileList.slice(0, gitFileState.showedFilesNum)
      .map(gitFileInfo => <FileItem 
        key={parseInt(gitFileInfo.name)} 
        fileInfo={gitFileInfo}
      />)
    }
    <button onClick={() => dispatch(setShowedFilesNum(gitFileState.showedFilesNum + 10))}>更多</button>
  </div>
};

export default Sider;
