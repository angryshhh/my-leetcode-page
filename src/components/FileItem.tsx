import React from 'react';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { GitFileInfo } from '../store/git-file/type';
import { setCode } from '../store/code/actions';
import './FileItem.css';

interface Props {
  fileInfo: GitFileInfo;
}

const FileItem: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

  return <a
    href="showCode"
    className="FileItem"
    onClick={e => {
      e.preventDefault();
      Axios
        .get(props.fileInfo.url)
        .then(({data}) => {
          dispatch(setCode({
            content: Buffer.from(data.content, data.encoding).toString(),
            url: props.fileInfo.url,
            name: props.fileInfo.name,
          }));
        })
        .catch(err => console.log('get code wrong' + err));
    }}
  >
    {/* remove '.js' */}
    {props.fileInfo.name.slice(0, -3)}
  </a>;
}

export default FileItem;
