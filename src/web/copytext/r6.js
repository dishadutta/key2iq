import React from 'react';
import ReactDOM from 'react-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { FaRegClone } from "react-icons/fa";

export default class r6 extends React.Component {


  render() {
    return (
      <div>

        <CopyToClipboard text="`{
  &quot;statusCode&quot;: &quot;10000&quot;,
  &quot;message&quot;: &quot;success&quot;,
  &quot;data&quot;: {
    &quot;name&quot;: &quot;Janishar Ali Anwar&quot;,
    &quot;profilePicUrl&quot;: &quot;https://avatars1.githubusercontent.com/u/11065002?s=460&u=1e8e42bda7e6f579a2b216767b2ed986619bbf78&v=4&quot;,
    &quot;roles&quot;: [
      {
        &quot;_id&quot;: &quot;5e7b8acad7aded2407e078d7&quot;,
        &quot;code&quot;: &quot;LEARNER&quot;
      },
      {
        &quot;_id&quot;: &quot;5e7b8c22d347fc2407c564a6&quot;,
        &quot;code&quot;: &quot;WRITER&quot;
      },
      {
        &quot;_id&quot;: &quot;5e7b8c2ad347fc2407c564a7&quot;,
        &quot;code&quot;: &quot;EDITOR&quot;
      }
    ]
  }
}
`" >
          <button><FaRegClone/></button>
        </CopyToClipboard>
      </div>
    );
  }
}