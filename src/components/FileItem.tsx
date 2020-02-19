import React from 'react';
import './FileItem.css';

interface GitFileInfo {
  name: string;
  url: string;
}

interface Props {
  fileInfo: GitFileInfo;
}

const FileItem: React.FC<Props> = (props) => {
  return <div 
    className="FileItem"
    onClick={() => console.log(props.fileInfo.url)}
  >
    {/* remove '.js' */}
    {props.fileInfo.name.slice(0, -3)}
  </div>;
}

export default FileItem;
