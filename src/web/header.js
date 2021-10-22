import React, { Component } from 'react';
import License from './copytext/licenseCC';

export default class header extends Component {
    render() {
        return (
            <div>
                <h4>Find this project useful ? ❤️</h4>
                <ul>
                    <li>Support it by clicking the ⭐ button on the upper right of this page. ✌️</li>
                </ul>
                <h4>License</h4>
                <p className="copy-bgcl">
                    <div className="row"><div className="col-11"></div><div className="col-1"><License/></div></div>
                    &nbsp;&nbsp; Copyright (C) 2020 MINDORKS NEXTGEN PRIVATE LIMITED <br/>
                    <br/>
                    &nbsp;&nbsp; Licensed under the Apache License, Version 2.0 (the "License");<br/>
                    &nbsp;&nbsp; you may not use this file except in compliance with the License.<br/>
                    &nbsp;&nbsp; You may obtain a copy of the License at<br/>
                    <br/>
                    &nbsp;&nbsp; &nbsp;&nbsp; http://www.apache.org/licenses/LICENSE-2.0<br/>
                    <br/>
                    &nbsp;&nbsp; Unless required by applicable law or agreed to in writing, software<br/>
                    &nbsp;&nbsp; distributed under the License is distributed on an "AS IS" BASIS,<br/>
                    &nbsp;&nbsp; WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.<br/>
                    &nbsp;&nbsp; See the License for the specific language governing permissions and<br/>
                    &nbsp;&nbsp; limitations under the License.<br/>
                    <br/>
                </p>
            </div>
        )
    }
}
