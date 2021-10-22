import React, { Component } from 'react'

export default class about extends Component {
    render() {
        return (
            <div>
                <h3>About this Open Source Project</h3>
                <hr/>
                <p>This open-source project is for you(community). Our Team at &nbsp;
                <a href="https://afteracademy.com/" target="_blank" rel="noreferrer noopener">AfterAcademy
                </a> has taken this initiative to promote 
                    Backend Learning in the best possible way. We are determined to provide quality content for everyone. Let's do it 
                    together by learning from this project.</p>
                
                <h3>We will learn and build the backend application for a blogging platform.</h3>
                <hr/>
                <p>The main focus will be to create a maintainable and highly testable architecture.<br/>Following are the features of this project:</p>
                <ul>
                    <li>
                    <span style={{fontWeight: "bold"}}>This backend is written in Typescript</span>: The type safety at build time and having intellisense for it in the IDE like vscode is unparalleled to productivity. We have found production bug reduced to a significant amount since most of the code vulnerabilities are identified during the build phase itself.
                    </li>
                    <li>
                    <span style={{fontWeight: "bold"}}>Separation of concern principle is applied</span>: Each component has been given a particular role. The role of the components is mutually exclusive. This makes the project easy to be unit tested.
                    </li>
                    <li>
                    <span style={{fontWeight: "bold"}}>Feature encapsulation is adopted</span>: The files or components that are related to a particular feature have been grouped unless those components are required in multiple features. This enhances the ability to share code across projects.
                    </li>
                    <li>
                    <span style={{fontWeight: "bold"}}>Centralised Error handling is done</span>: We have created a framework where all the errors are handled centrally. This reduces the ambiguity in the development when the project grows larger.
                    </li>
                    <li>
                    <span style={{fontWeight: "bold"}}>Centralised Response handling is done</span>: Similar to Error handling we have a response handling framework. This makes it very convenient to apply a common API response pattern.
                    </li>
                    <li>
                    <span style={{fontWeight: "bold"}}>Mongodb is used through Mongoose</span>: Mongodb fits very well to the node.js application. Being NoSQL, fast, and scalable makes it ideal for modern web applications.
                    </li>
                    <li>
                    <span style={{fontWeight: "bold"}}>Async execution is adopted</span>: We have used async/await for the promises and made sure to use the non-blocking version of all the functions with few exceptions.
                    </li>
                    <li>
                    <span style={{fontWeight: "bold"}}>Docker compose has been configured</span>: We have created the Dockerfile to provide the easy deployability without any setup and configurations.
                    </li>
                    <li>
                    <span style={{fontWeight: "bold"}}>Unit test is favored</span>: The tests have been written to test the functions and routes without the need of the database server. Integration tests has also been done but the unit test is favored.
                    </li>
                    <li>
                    <span style={{fontWeight: "bold"}}>A pure backend project</span>: We have experienced that when a backend is developed clubbed with a frontend then in the future it becomes really difficult to scale. We would want to create a separate backend project that servers many websites and mobile apps.
                    </li>
                </ul>
            </div>
        )
    }
}
