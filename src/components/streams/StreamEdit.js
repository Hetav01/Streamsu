import { render } from '@testing-library/react';
import _ from "lodash";
import React from 'react';
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {     //these are the props passed down by the react router dom.
                                              //params are the extensions added to the main link address..as here in the case of StreamEdit in App.js.
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    } 

    onSubmit = (formValues) => {    //remember formValues are just supposed to be the changed and edited values of the stream.    
        this.props.editStream(this.props.match.params.id, formValues);
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
                <h3>Edit a Stream</h3>
                <StreamForm initialValues={_.pick(this.props.stream, "title", "description")} onSubmit={this.onSubmit}></StreamForm>
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
    {fetchStream, editStream}
)(StreamEdit);