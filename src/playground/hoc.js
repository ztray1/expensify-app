import React from "react";

import ReactDOM from "react-dom";

const Info=(props)=>(
    <div>
        <h1>Info</h1>
        <p>This Info is:{props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent)=>{
    return (props)=>(
        <div>
            {props.isAdmin&&<p>This is private info. Please do not share</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponent)=>{
    return (props)=>(
        <div>
            {props.isAuth&&<p>This is authentication info </p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const AdminInfo=withAdminWarning(Info);
const AuthInfo=requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={false} info="These are the details" />,document.getElementById("app"));
ReactDOM.render(<AuthInfo isAuth={false} info="These are the authentication for you" />,document.getElementById("app"));