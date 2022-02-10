import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput({ input }) {
    return <input {...input} />
  }

  render() {
    return (
      <form>
        <Field name='Title' component={this.renderInput} />
        <Field name='Description' component={this.renderInput} />
      </form>
    );
  }
}

//Similar to mapStateToProps connect, map the redux store to state
export default reduxForm({
  form: 'streamCreate'
})(StreamCreate)