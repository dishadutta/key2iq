import React from 'react';
import ReactDOM from 'react-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { FaRegClone } from "react-icons/fa";

export default class r1 extends React.Component {


  render() {
    return (
      <div>

        <CopyToClipboard text="POST /v1/signup/basic HTTP/1.1
Host: localhost:3000
x-api-key: GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj
Content-Type: application/json
" >
  <button><FaRegClone/></button>
</CopyToClipboard>
      </div>
    );
  }
}