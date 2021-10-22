import React, { Component } from 'react'
import Handler from './images/handler.png'
import Blogging from './images/blogging.png'
import Schema from './images/schema.png'

export default class diagrams extends Component {
    render() {
        return (
            <div>
                <h3>We have also open source a complete blogging website working on this backend project: 
                    <a href="https://github.com/afteracademy/react-app-architecture" target="_blank" rel="noreferrer noopener">Goto Repository</a>
                </h3>
                <hr/>
                <p>In the above repository [<span style={{fontWeight: "540"}}>React.js Isomorphic Web Application Architecture</span>] 
                    we will learn and build a React web application for a blogging platform using this project as its API server. 
                    <a href="https://demo.react-app-architecture.afteracademy.com/" target="_blank" rel="noreferrer noopener">Visit demo website</a>
                </p>
                <h3>3RE Architecture: Router, RouteHandler, ResponseHandler, ErrorHandler</h3>
                <hr/>
                <a href="https://raw.githubusercontent.com/afteracademy/nodejs-backend-architecture-typescript/master/addons/github_assets/3RE.png"
                   target="_blank" rel="noreferrer noopener"><img src={Handler} className="img-size"/></a> <br/><br/>
                <h3>Project Outline: Blogging Platform</h3>
                <hr/>
                <a href="https://raw.githubusercontent.com/afteracademy/nodejs-backend-architecture-typescript/master/addons/github_assets/project-outline.png"
                   target="_blank" rel="noreferrer noopener"><img src={Blogging} className="img-size"/></a> <br/><br/>
                <h3>Request-Response Handling Schematic Diagram</h3>
                <hr/>
                <a href="https://raw.githubusercontent.com/afteracademy/nodejs-backend-architecture-typescript/master/addons/github_assets/api-structure.png"
                   target="_blank" rel="noreferrer noopener"><img src={Schema} className="img-size"/></a> <br/><br/>
            </div>
        )
    }
}
