import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../store';
import { setShowedFilesNum } from '../store/git-file/actions';
import FileItem from '../components/FileItem';
import './Sider.css';

const Sider: React.FC = () => {
  const gitFile = useTypedSelector(state => state.gitFile);
  const dispatch = useDispatch();

  return <div className="Sider">
    {
      gitFile.gitFileList.slice(0, gitFile.showedFilesNum)
      .map(gitFileInfo => <FileItem 
        key={parseInt(gitFileInfo.name)} 
        fileInfo={gitFileInfo}
      />)
    }
    <button onClick={() => dispatch(setShowedFilesNum(gitFile.showedFilesNum + 10))}>更多</button>
  </div>
};

export default Sider;
