import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from "react-redux";  //this is used for connecting the action creator to the component.

class StreamForm extends React.Component {

    renderError(meta) {
        if (meta.touched && meta.error) {
            return (
                <div className="ui error message">
                    <div className="header">{meta.error}</div>
                </div>
            );
        }
    }

    renderInput = ({input, label, meta}) => {

        const className = `field ${meta.error && meta.touched ? "error" : ""}`;
            return (
                <div className={className}>
                    <label>{label}</label>
                    <input {...input} autoComplete="off" />
                    {this.renderError(meta)} 
                </div>
            );
    };

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }


/*this syntax basically assigns the onChange prop to onChange and so on.*/
/*Here the Field component does not know about the label prop to it is passed as an arguement to the renderInput method */
    render() {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)} >
                <Field name="title" type="text" component={this.renderInput} label="Enter Title"/>    
                <Field name="description" type="text" component={this.renderInput} label="Enter Description"/>
                <button className="ui button primary" >Submit</button>
            </form>
        );
    }
};

const validate = (formValues) => {
    const errors = {};

    if (!formValues.title) {
        errors.title = "You must have a title!";
    }
    if (!formValues.description) {
        errors.description = "You must have a description!";
    }
    return errors;
}

/* export default reduxForm({       //the reduxForm method works like the connect() method in normal redux.
    form: "streamCreate",
    validate: validate
})(StreamCreate); */

const reduxFormWrapper = reduxForm({       //the reduxForm method works like the connect() method in normal redux.
    form: "streamForm",
    validate: validate
})(StreamForm); 

export default connect(null)(reduxFormWrapper);