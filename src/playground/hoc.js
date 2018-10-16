import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is Private info please don't share</p>}
            
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                    <p>young pop need more info</p>)
            }
            
        </div>
    );
};



const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);
console.log('hi');
//ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="abcdefg" />, document.getElementById('app'));