import React, { Component } from 'react'
import AfterAcademy from './images/academy.png';

export default class head extends Component {
    render() {
        return (
            <div>
                <div style={{paddingTop: "10px"}}></div>
                <h1>Node.js Backend Architecture Typescript Project</h1>
                <hr/>
                <p>Learn to build a Blogging platform like Medium, MindOrks, and FreeCodeCamp - Open-Source Project By AfterAcademy</p>
                <a href="https://camo.githubusercontent.com/7e4a69c5079d4f2685ea52f032777d8dbfc7ed0dab81f65357379d37f2f8dfbc/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f416674657241636164656d792d6f70656e736f757263652d626c75652e737667">
                    <span className="button-1">AfterAcademy</span></a>
                    <a href="https://camo.githubusercontent.com/7e4a69c5079d4f2685ea52f032777d8dbfc7ed0dab81f65357379d37f2f8dfbc/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f416674657241636164656d792d6f70656e736f757263652d626c75652e737667">
                        <span className="button-2">opensource</span></a>  
                &nbsp;&nbsp;&nbsp; 
                <a href="https://travis-ci.org/afteracademy/nodejs-backend-architecture-typescript">
                    <span className="button-1">build</span></a>
                <a href="https://travis-ci.org/afteracademy/nodejs-backend-architecture-typescript">
                    <span className="button-3">passing</span></a> <br/>
                <a href="https://raw.githubusercontent.com/afteracademy/nodejs-backend-architecture-typescript/master/addons/github_assets/cover-nodejs-backend.png" target="_blank" rel="noreferrer noopener">
                    <img src={AfterAcademy} className="img-size"/>
                </a>
            </div>
        )
    }
}
