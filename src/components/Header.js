import React from 'react';
import {Link} from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">Streamsu</Link>
            <div className="right menu">
                <Link to="/" className="item">All Streams</Link>
                <GoogleAuth />
            </div>
        </div>
    );
};

export default Header;

/*300431400280-rifn9v6q957d4mjt3aaen7ncm5711ssl.apps.googleusercontent.com */