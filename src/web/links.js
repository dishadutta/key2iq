import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class links extends Component {
    render() {
        return (
            <div>
                <h4>Learn the concepts used in this project</h4>
                <hr/>
                <ul>
                    <li><a href="https://afteracademy.com/blog/design-node-js-backend-architecture-like-a-pro">Design Node.js Backend Architecture like a Pro</a></li>
                    <li><a href="https://youtu.be/Nwh7wTtUV5I" target="_blank" rel="noreferrer noopener">The video guide to build and run this project</a></li>
                    <li><a href="https://afteracademy.com/blog/implement-json-web-token-jwt-authentication-using-access-token-and-refresh-token">Implement JSON Web Token (JWT) Authentication using AccessToken and RefreshToken</a></li>
                    <li><a href="https://afteracademy.com/blog/typescript-tutorial-for-beginners">TypeScript Tutorial For Beginners</a></li>
                    <li><a href="https://afteracademy.com/blog/from-javascript-to-typescript">From JavaScript to TypeScript</a></li>
                    <li><a href="https://afteracademy.com/blog/authentication-vs-authorization">Authentication vs Authorization</a></li>
                </ul>
                <h3>You can find the complete API documentation <a href="https://documenter.getpostman.com/view/1552895/SzYUZg52?version=latest">here</a></h3>
                <hr/>
                <a href="https://raw.githubusercontent.com/afteracademy/nodejs-backend-architecture-typescript/master/addons/github_assets/api-doc-button.png">
                    <span className="api-btn">View API Docs</span></a>
            </div>
        )
    }
}
