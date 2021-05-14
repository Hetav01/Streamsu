import React from 'react';
import { connect } from "react-redux";
import { signIn, signOut } from "../actions/index";

class GoogleAuth extends React.Component {
    
   // state = { isSignedIn: null }; //don't need this anymore rn.

    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId: "300431400280-rifn9v6q957d4mjt3aaen7ncm5711ssl.apps.googleusercontent.com",
                scope: "email"
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                //this.setState({ isSignedIn: this.auth.isSignedIn.get() });    //returns boolean value whether the user is signed in or not.
                //instead of calling through the state variable, we are now going to use the redux state.
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange); //listen is actually an event listener that changes when the state is updated.
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        }
        else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return (
                null
            );
        }
        else if (this.props.isSignedIn === true) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon"></i>
                    Sign Out
                </button>
            )
        }
        else {
            return (
                <button onClick={this.onSignInClick} className="ui green google button">
                    <i className="google icon"></i>
                    Sign In
                </button>
            )
        }
    }

    render () {
        return (
            <div>{this.renderAuthButton()}</div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(                 //here we are connecting the actions with the component.
    mapStateToProps, { signIn, signOut}
)(GoogleAuth);                  