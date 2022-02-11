import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { createStream } from '../../actions'

class StreamCreate extends React.Component {
  //The parameters get here under the formProps var
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.touched && meta.error ? 'error' : ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete='off' />
        {this.renderError(meta)}
      </div>
    );
  }

  renderError = ({ touched, error }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }

    return null;
  }

  //the submit values from the Fields get into the method as parameters (the name is of the parameter can be anything)
  onSubmit(values) {
    this.props.createStream(values)
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name='title' component={this.renderInput} label='Enter Title' />
        <Field name='description' component={this.renderInput} label='Enter Description' />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

//Both method and parameter must be those names
const validate = (formValues) => {
  const errors = {}
  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
}

//reduxForm is similar to mapStateToProps connect, map the redux store to state
const reduxFormWrapped = reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate);

//This is a way to connect both redux-form and react-redux
export default connect(null, { createStream })(reduxFormWrapped);