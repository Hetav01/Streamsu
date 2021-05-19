import { render } from '@testing-library/react';
import React from 'react';
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamEdit extends React.Component {     //these are the props passed down by the react router dom.
                                              //params are the extensions added to the main link address..as here in the case of StreamEdit in App.js.
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    } 

    render() {
        console.log(this.props);
        if (!this.props.stream) {
            return (
                <div>Loading...</div>
            );
        };
        return (
            <div>   
                {this.props.stream.title}
                <br />
                {this.props.stream.description}
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => {  //ownProps refers to the props that are presnt in the current component.

    return { 
        stream: state.streams[ownProps.match.params.id]
    };
}

export default connect(
    mapStateToProps,
    {fetchStream}
)(StreamEdit);