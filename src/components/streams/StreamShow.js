import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getStream } from '../../actions';

class StreamShow extends React.Component {
  componentDidMount() {
    this.props.getStream(this.props.match.params.id);
  }

  renderContent() {
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <h1>{this.props.stream.title}</h1>
        <h5>{this.props.stream.description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
    currentId: state.auth.currentId
  }
}

export default connect(mapStateToProps, { getStream })(StreamShow)