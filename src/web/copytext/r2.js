import React from 'react';
import ReactDOM from 'react-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { FaRegClone } from "react-icons/fa";

export default class r2 extends React.Component {


  render() {
    return (
      <div>

        <CopyToClipboard text="{
    &quot;name&quot; : &quot;Janishar Ali&quot;,
    &quot;email&quot;: &quot;ali@afteracademy.com&quot;,
    &quot;password&quot;: &quot;changeit&quot;,
    &quot;profilePicUrl&quot;: &quot;https://avatars1.githubusercontent.com/u/11065002?s=460&u=1e8e42bda7e6f579a2b216767b2ed986619bbf78&v=4&quot;
}
" >
          <button><FaRegClone/></button>
        </CopyToClipboard>
      </div>
    );
  }
}