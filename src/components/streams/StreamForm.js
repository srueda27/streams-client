import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  //The parameters get here under the formProps var, from the this.props.handleSubmit function of reduxForm
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
  onSubmit = (values) => {
    this.props.onSubmit(values);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
          <Field
            name='title'
            component={this.renderInput}
            label='Enter Title'
          />
          <Field
            name='description'
            component={this.renderInput}
            label='Enter Description'
          />
          <button type='submit' className="ui button primary">Submit</button>
        </form>
      </div>
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
//form attribute is necesary but the string inside not
export default reduxForm({
  form: 'streamCreate',
  validate
})(StreamForm);;