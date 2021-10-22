import React, { Component } from 'react'

export default class build extends Component {
    render() {
        return (
            <div>
                <h3>How to build and run this project</h3>
                <hr/>
                <ul>
                    <li>
                    Install using Docker Compose [<span style={{fontWeight: "550"}}>Recommended Method</span>]
                    <ul>
                        <li className="radio">Clone this repo.</li>
                        <li className="radio">Make a copy of <span style={{fontWeight: "550"}}>.env.example</span> file to <span style={{fontWeight: "550"}}>.env</span>.</li>
                        <li className="radio">Make a copy of <span style={{fontWeight: "550"}}>keys/private.pem.example</span> file to <span style={{fontWeight: "550"}}>keys/private.pem</span>.</li>
                        <li className="radio">Make a copy of <span style={{fontWeight: "550"}}>keys/public.pem.example</span> file to <span style={{fontWeight: "550"}}>keys/public.pem</span>.</li>
                        <li className="radio">Make a copy of <span style={{fontWeight: "550"}}>tests/.env.test.example</span> file to <span style={{fontWeight: "550"}}>tests/.env.test</span>.</li>
                        <li className="radio">Install Docker and Docker Compose. <a href="https://docs.docker.com/install/">Find Instructions Here.</a></li>
                        <li className="radio">Execute <span className="highlight">docker-compose up -d</span> in terminal from the repo directory.</li>
                        <li className="radio">You will be able to access the api from <a href="http://localhost:3000/">http://localhost:3000</a></li>
                        <li className="radio"><span style={{fontStyle: "italic"}}>If having any issue</span> then make sure 3000 port is not occupied else provide a different port in <span style={{fontWeight: "550"}}>.env</span> file.</li>
                        <li className="radio"><span style={{fontStyle: "italic"}}>If having any issue</span> then make sure 27017 port is not occupied else provide a different port in <span style={{fontWeight: "550"}}>.env</span> file.</li>
                    </ul>
                    </li>
                    <li>
                    Run The Tests
                    <ul>
                        <li className="radio">Install node.js and npm on your local machine.</li>
                        <li className="radio">From the root of the project executes in terminal <span className="highlight">npm install</span>.</li>
                        <li className="radio" style={{fontStyle: "italic"}}>Use the latest version of node on the local machine if the build fails.</li>
                        <li className="radio">To run the tests execute <span className="highlight">npm test</span>.</li>
                    </ul>
                    </li>
                    <li>
                    Install Without Docker [<span style={{fontWeight: "550"}}>2nd Method</span>]
                    <ul>
                        <li className="radio">Install MongoDB on your local.</li>
                        <li className="radio">Do steps 1 to 5 as listed for <span style={{fontWeight: "550"}}>Install using Docker Compose</span>.</li>
                        <li className="radio">Do steps 1 to 3 as listed for <span style={{fontWeight: "550"}}>Run The Tests</span>.</li>
                        <li className="radio">Create users in MongoDB and seed the data taking reference from the <span style={{fontWeight: "550"}}>addons/init-mongo.js</span></li>
                        <li className="radio">Change the <span className="highlight">DB_HOST</span> to <span className="highlight">localhost</span> in <span style={{fontWeight: "550"}}>.env</span> and <span style={{fontWeight: "550"}}>tests/.env.test files</span>.</li>
                        <li className="radio">Execute <span className="highlight">npm start</span> and You will be able to access the API from <a href="http://localhost:3000/">http://localhost:3000</a></li>
                        <li className="radio">To run the tests execute <span className="highlight">npm test</span>.</li>
                    </ul>
                    </li>
                </ul>
                <br/>
                <h3>Explore Online Tutorials and Courses To Learn More by AfterAcademy</h3>
                <hr/>
                <ul>
                    <li>
                    <a href="https://afteracademy.com/blogs/backend">Backend Tutorial</a> - All free tutorials by AfterAcademy
                    </li>
                    <li>
                    <a href="https://afteracademy.com/courses/backend">Online Courses for Backend</a> - Master the skills that companies love to hire.
                    </li>
                </ul>
                <br/>
                <h3>Learn Backend Development From Our Videos</h3>
                <hr/>
                <ul>
                <li><a href="https://youtu.be/Q0nfLi-4GBg">Introduction to Web Backend Development for Beginners</a></li>
                <li><a href="https://www.youtube.com/playlist?list=PLqOiaH9id5quh5Dph5yuXfdHVGe1LrKvT">Backend System Design for Startups</a></li>
                <li><a href="https://www.youtube.com/playlist?list=PLqOiaH9id5qtw5MhI-C1G3CS7RVZ8ejct">Practical Javascript for Beginners</a></li>
                </ul>
            </div>
        )
    }
}
