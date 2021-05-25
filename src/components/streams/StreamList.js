import React from 'react';
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import { Link } from "react-router-dom";
import streams from '../../apis/streams';

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    };

    renderAdmin(stream) {
        if (stream.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} className="ui inverted primary button">Edit</Link>
                    <Link to={`/streams/delete/${stream.id}`} className="ui inverted red button">Delete</Link>
                </div>
            )
        }
    }

    renderList() {
        return this.props.streams.map((stream) => {
            return (
                <div className="item" key={stream.id} >
                    {this.renderAdmin(stream)}
                    <i className="large middle aligned icon camera"/>
                    <h4 className="content">
                        <Link to={`/streams/${stream.id}`} className="ui small header">{stream.title}</Link>
                    </h4>
                    <div className="description">{stream.description}</div>
                </div>
            );
        });
    };

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{textAlign: "right"}}>
                    <Link to="/streams/new" className="ui inverted button primary">
                        Create Stream
                    </Link>
                </div>
            );
        }
    };

    render() {
        return (
            <div>
                <h3>Streams</h3>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
                {this.renderCreate()}
            </div>
        );
    };
};



const mapStateToProps = (state) => {
        return {
            streams: Object.values(state.streams),
            currentUserId: state.auth.userId,
            isSignedIn: state.auth.isSignedIn
        }

}

export default connect(mapStateToProps, { fetchStreams })(StreamList);