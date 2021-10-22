import React, { Component } from 'react'
import CC from './copytext/CC';

export default class structure extends Component {
    render() {
        return (
            <div>
                <h3>Project Directory Structure</h3>
                <hr/>
                <p className="copy-bgcl">
                <div className="row"><div className="col-11"></div><div className="col-1"><CC/></div></div>
                ├── src<br/>
                │   ├── server.ts<br/>
                │   ├── app.ts<br/>
                │   ├── config.ts<br/>
                │   ├── auth<br/>
                │   │   ├── apikey.ts<br/>
                │   │   ├── authUtils.ts<br/>
                │   │   ├── authentication.ts<br/>
                │   │   ├── authorization.ts<br/>
                │   │   └── schema.ts<br/>
                │   ├── core<br/>
                │   │   ├── ApiError.ts<br/>
                │   │   ├── ApiResponse.ts<br/>
                │   │   ├── JWT.ts<br/>
                │   │   └── Logger.ts<br/>
                │   ├── database<br/>
                │   │   ├── index.ts<br/>
                │   │   ├── model<br/>
                │   │   │   ├── ApiKey.ts<br/>
                │   │   │   ├── Blog.ts<br/>
                │   │   │   ├── Keystore.ts<br/>
                │   │   │   ├── Role.ts<br/>
                │   │   │   └── User.ts<br/>
                │   │   └── repository<br/>
                │   │       ├── ApiKeyRepo.ts<br/>
                │   │       ├── BlogRepo.ts<br/>
                │   │       ├── KeystoreRepo.ts<br/>
                │   │       ├── RoleRepo.ts<br/>
                │   │       └── UserRepo.ts<br/>
                │   ├── helpers<br/>
                │   │   ├── asyncHandler.ts<br/>
                │   │   ├── role.ts<br/>
                │   │   └── validator.ts<br/>
                │   ├── routes<br/>
                │   │   └── v1<br/>
                │   │       ├── access<br/>
                │   │       │   ├── login.ts<br/>
                │   │       │   ├── logout.ts<br/>
                │   │       │   ├── schema.ts<br/>
                │   │       │   ├── signup.ts<br/>
                │   │       │   └── token.ts<br/>
                │   │       ├── blog<br/>
                │   │       │   ├── blogDetail.ts<br/>
                │   │       │   ├── blogList.ts<br/>
                │   │       │   ├── editor.ts<br/>
                │   │       │   ├── schema.ts<br/>
                │   │       │   └── writer.ts<br/>
                │   │       ├── index.ts<br/>
                │   │       └── profile<br/>
                │   │           ├── schema.ts<br/>
                │   │           └── user.ts<br/>
                │   └── types<br/>
                │       └── app-request.d.ts<br/>
                ├── tests<br/>
                │   ├── auth<br/>
                │   │   ├── apikey<br/>
                │   │   │   ├── mock.ts<br/>
                │   │   │   └── unit.test.ts<br/>
                │   │   ├── authUtils<br/>
                │   │   │   ├── mock.ts<br/>
                │   │   │   └── unit.test.ts<br/>
                │   │   ├── authentication<br/>
                │   │   │   ├── mock.ts<br/>
                │   │   │   └── unit.test.ts<br/>
                │   │   └── authorization<br/>
                │   │       ├── mock.ts<br/>
                │   │       └── unit.test.ts<br/>
                │   ├── core<br/>
                │   │   └── jwt<br/>
                │   │       ├── mock.ts<br/>
                │   │       └── unit.test.ts<br/>
                │   ├── routes<br/>
                │   │   └── v1<br/>
                │   │       ├── blog<br/>
                │   │       │   ├── blogDetail<br/>
                │   │       │   │   ├── mock.ts<br/>
                │   │       │   │   └── unit.test.ts<br/>
                │   │       │   └── writer<br/>
                │   │       │       ├── mock.ts<br/>
                │   │       │       └── unit.test.ts<br/>
                │   │       ├── login<br/>
                │   │       │   ├── integration.test.ts<br/>
                │   │       │   ├── mock.ts<br/>
                │   │       │   └── unit.test.ts<br/>
                │   │       └── signup<br/>
                │   │           ├── mock.ts<br/>
                │   │           └── unit.test.ts<br/>
                │   ├── .env.test<br/>
                │   └── setup.ts<br/>
                ├── addons<br/>
                │   └── init-mongo.js<br/>
                ├── keys<br/>
                │   ├── private.pem<br/>
                │   └── public.pem<br/>
                ├── .env<br/>
                ├── .gitignore<br/>
                ├── .dockerignore<br/>
                ├── .eslintrc<br/>
                ├── .eslintignore<br/>
                ├── .prettierrc<br/>
                ├── .prettierignore<br/>
                ├── .travis.yml<br/>
                ├── .vscode<br/>
                │   └── launch.json<br/>
                ├── Dockerfile<br/>
                ├── docker-compose.yml<br/>
                ├── package-lock.json<br/>
                ├── package.json<br/>
                ├── jest.config.js<br/>
                └── tsconfig.json<br/>
                </p>
            <h3>Directory Traversal for Signup API call</h3>
            <hr/>
            <span className="highlight">/src → server.ts → app.ts → /routes/v1/index.ts → /auth/apikey.ts → schema.ts → /helpers/validator.ts → asyncHandler.ts → 
            /routes/v1/signup.ts → schema.ts → /helpers/validator.ts → asyncHandler.ts → /database/repository/UserRepo.ts → 
            /database/model/User.ts → /core/ApiResponses.ts</span>
            </div>
        )
    }
}
