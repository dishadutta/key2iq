import React from 'react';
import ReactDOM from 'react-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { FaRegClone } from "react-icons/fa";

export default class r3 extends React.Component {


  render() {
    return (
      <div>

        <CopyToClipboard text="
        {
          &quot;statusCode&quot;: &quot;10000&quot;,
          &quot;message&quot;: &quot;Signup Successful&quot;,
          &quot;data&quot;: {
            &quot;user&quot;: {
              &quot;_id&quot;: &quot;5e7c9d32307a223bb8a4b12b&quot;,
              &quot;name&quot;: &quot;Janishar Ali&quot;,
              &quot;email&quot;: &quot;ali@afteracademy.com&quot;,
              &quot;roles&quot;: [
                &quot;5e7b8acad7aded2407e078d7&quot;
              ],
              &quot;profilePicUrl&quot;: &quot;https://avatars1.githubusercontent.com/u/11065002?s=460&u=1e8e42bda7e6f579a2b216767b2ed986619bbf78&v=4&quot;
            },
            &quot;tokens&quot;: {
              &quot;accessToken&quot;: &quot;some_token&quot;,
              &quot;refreshToken&quot;: &quot;some_token&quot;
            }
          }
        }" >
          <button><FaRegClone/></button>
        </CopyToClipboard>
      </div>
    );
  }
}