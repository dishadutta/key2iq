import React from 'react';
import ReactDOM from 'react-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { FaRegClone } from "react-icons/fa";

export default class r4 extends React.Component {


  render() {
    return (
      <div>

        <CopyToClipboard text="
        {
            &quot;statusCode&quot;: &quot;10001&quot;,
            &quot;message&quot;: &quot;Bad Parameters&quot;
          }" >
          <button><FaRegClone/></button>
        </CopyToClipboard>
      </div>
    );
  }
}