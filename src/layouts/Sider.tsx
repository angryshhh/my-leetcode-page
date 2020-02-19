import React, { useState } from 'react';
import FileItem from '../components/FileItem';
import './Sider.css';

interface GitFileInfo {
  name: string;
  url: string;
}

interface Props {
  gitFileList: Array<GitFileInfo>;
}

const Sider: React.FC<Props> = (props) => {
  const [showedFilesNum, setShowedFilesNum] = useState(10);

  return <div className="Sider">
    {
      props.gitFileList.slice(0, showedFilesNum)
      .map(gitFileInfo => <FileItem 
        key={parseInt(gitFileInfo.name)} 
        fileInfo={gitFileInfo}
      />)
    }
    <button onClick={() => setShowedFilesNum(showedFilesNum + 10)}>更多</button>
  </div>
};

export default Sider;
