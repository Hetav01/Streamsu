import React from 'react';
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";
import { Link } from "react-router-dom";

class StreamDelete extends React.Component {
    
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions() {
        return (   //react fragemnt is a component of React that is basically invisible in the DOM. but does the work of a component.
            <React.Fragment>    
                <button onClick={() => {this.props.deleteStream(this.props.match.params.id)}} className="ui negative button">Delete</button>
                <Link to="/streams" className="ui button">Cancel</Link>
            </React.Fragment>
        );
    }

    renderContent() {
        if (!this.props.stream) {
            return (
                `Are you sure you want to delete this stream ?`
            );
        }
        else {
            return (
                `Are you sure you want to delete the stream with the title: ${this.props.stream.title} ?`
            );
        }
    }

    render() {
        return (
            <div>
                Stream Delete
                <Modal title="Delete Stream" 
                    content={this.renderContent()}
                    actions={this.renderActions()} 
                    onDismiss={() => {history.push("/")}}
                />
            </div>
        );
    };
};

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
};

export default connect(mapStateToProps, 
    {fetchStream, deleteStream}    
)(StreamDelete);