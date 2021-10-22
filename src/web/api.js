import React, { Component } from 'react'
import R1 from './copytext/r1';
import R2 from './copytext/r2';
import R3 from './copytext/r3';
import R4 from './copytext/r4';
import R5 from './copytext/r4';

export default class api extends Component {
    render() {
        return (
            <div>
                <h3>API Examples</h3>
                <hr/>
                <ul>
                    <li>Signup</li>
                    <ul>
                        <li className="radio">Method and Headers</li>
                            <p className="copy-bgcl">
                            <div className="row"><div className="col-11"></div><div className="col-1"><R1/></div></div>
                                POST /v1/signup/basic HTTP/1.1 <br/>
                                Host: localhost:3000 <br/>
                                x-api-key: GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj <br/>
                                Content-Type: application/json
                            </p>

                        <li className="radio">Request Body</li>
                            <p className="copy-bgcl">
                            <div className="row"><div className="col-11"></div><div className="col-1"><R2/></div></div>
                           
                            "name" : "Janishar Ali", <br/>
                            "email": "ali@afteracademy.com", <br/>
                            "password": "changeit", <br/>
                            "profilePicUrl": "https://avatars1.githubusercontent.com/u/11065002?s=460&u=1e8e42bda7e6f579a2b216767b2ed986619bbf78&v=4"
                            </p>

                        <li className="radio">Response Body: 200</li>
                            <p className="copy-bgcl">
                            <div className="row"><div className="col-11"></div><div className="col-1"><R3/></div></div>
                            
                            "statusCode": "10000",<br/>
                            "message": "Signup Successful",<br/>
                            "data": <br/>
                                "user": <br/>
                                "_id": "5e7c9d32307a223bb8a4b12b",<br/>
                                "name": "Janishar Ali",<br/>
                                "email": "ali@afteracademy.com",<br/>
                                "roles": [<br/>
                                    "5e7b8acad7aded2407e078d7" <br/>
                                ], <br/>
                                "profilePicUrl": "https://avatars1.githubusercontent.com/u/11065002?s=460&u=1e8e42bda7e6f579a2b216767b2ed986619bbf78&v=4" <br/>
                                , <br/>
                                "tokens": 
                                "accessToken": "some_token", <br/>
                                "refreshToken": "some_token" <br/>
                            </p>

                        <li className="radio">Response Body: 400</li>
                            <p className="copy-bgcl">
                            <div className="row"><div className="col-11"></div><div className="col-1"><R4/></div></div>
                            "statusCode": "10001", <br/>
                            "message": "Bad Parameters"
                            </p>
                    </ul>
                    <li>Profile Private</li>
                    <ul>
                        <li className="radio">Method and Headers</li>
                        <p className="copy-bgcl">
                                <div className="row"><div className="col-11"></div><div className="col-1"><R4/></div></div>
                                GET /v1/profile/my HTTP/1.1 <br/>
                                Host: localhost:3000 <br/>
                                x-api-key: GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj <br/>
                                Content-Type: application/json <br/>
                                Authorization: Bearer `your_token_received_from_signup_or_login`
                        </p>

                        <li className="radio">Response Body: 200</li>
                        <p className="copy-bgcl">
                            <div className="row"><div className="col-11"></div><div className="col-1"><R5/></div></div>
                            
                            "statusCode": "10000", <br/>
                            "message": "success", <br/>
                            "data":  <br/>
                                "name": "Janishar Ali Anwar", <br/>
                                "profilePicUrl": "https://avatars1.githubusercontent.com/u/11065002?s=460&u=1e8e42bda7e6f579a2b216767b2ed986619bbf78&v=4",<br/>
                                "roles": [ <br/>
                                    <br/>
                                    "_id": "5e7b8acad7aded2407e078d7", <br/>
                                    "code": "LEARNER" <br/>
                                ,<br/>
                                
                                    "_id": "5e7b8c22d347fc2407c564a6", <br/>
                                    "code": "WRITER" <br/>
                                ,<br/> 
                                <br/>
                                    "_id": "5e7b8c2ad347fc2407c564a7",<br/>
                                    "code": "EDITOR"<br/>
                                    <br/>
                                ]<br/>
                        </p>
                    </ul>
                </ul>
            </div>
        )
    }
}
