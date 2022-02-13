import _ from "lodash";
import React from "react";
import { connect } from "react-redux";

import { getStream, updateStream } from '../../actions';
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.getStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.updateStream(this.props.match.params.id, formValues);
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentId) {
      return (
        <StreamForm
          initialValues={_.pick(this.props.stream, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      );
    }
  }

  render() {
    if (!this.props.stream) {
      return null
    }

    //initialValues (special name)
    //the keys of the object send down that prop needs to be name att of the Field component of the redux-form
    return (
      <div>
        <h3>Edit a Stream</h3>
        {this.renderAdmin(this.props.stream)}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
    currentId: state.auth.userId,
  }
}

export default connect(mapStateToProps, { getStream, updateStream })(StreamEdit);