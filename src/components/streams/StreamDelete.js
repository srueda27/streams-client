import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getStream, deleteStream } from '../../actions';
import history from '../../history';
import Modal from "../Modal";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.getStream(this.props.match.params.id);
  }

  delete = () => {
    this.props.deleteStream(this.props.match.params.id);
  }

  renderActions() {
    /* <> === React.Fragment */
    return (
      <>
        <button onClick={this.delete} className="ui negative button">Delete</button>
        <Link to="/" className="ui button">Cancel</Link>
      </>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream?'
    }

    return (
      <React.Fragment>
        Are you sure you want to delete this stream with title: <b>{this.props.stream.title}</b>
      </React.Fragment>
    )
  }

  render() {
    return (
      <Modal
        header='Delete Stream'
        content={this.renderContent()}
        actions={this.renderActions()}
        onSubmit={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
    currentId: state.auth.currentId
  }
}

export default connect(mapStateToProps, { getStream, deleteStream })(StreamDelete)