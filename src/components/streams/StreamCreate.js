import React from "react";
import { connect } from "react-redux";

import { createStream } from '../../actions';
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  onSubmit = (values) => {
    this.props.createStream(values);
  }

  render() {
    return (
      <div>
        <h3>Create Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

//This is a way to connect both redux-form and react-redux
export default connect(null, { createStream })(StreamCreate);