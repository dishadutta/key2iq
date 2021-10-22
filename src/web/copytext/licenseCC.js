import React from 'react';
import ReactDOM from 'react-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { FaRegClone } from "react-icons/fa";

export default class licenseCC extends React.Component {


  render() {
    return (
      <div>

        <CopyToClipboard text="" >
          <button><FaRegClone/></button>
        </CopyToClipboard>
      </div>
    );
  }
}