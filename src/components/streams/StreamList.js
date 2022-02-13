import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { listStreams } from "../../actions";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.listStreams();
  }

  //This method will allows us to decide whether we render or not the other elements depending on if the current user is the one who created the stream
  renderAdmin(stream) {
    if (stream.userId === this.props.currentId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
          <Link to={`/streams/delete/${stream.id}`} className="ui button negative">Delete</Link>
        </div>
      );
    }
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }} >
          <Link to='/streams/new' className="ui button primary">Create Stream</Link>
        </div>
      );
    }
  }

  renderLink(stream) {
    let title;
    if (this.props.isSignedIn) {
      title = (
        <Link to={`/streams/edit/${stream.id}`}>{stream.title}</Link>
      );
    } else {
      title = stream.title
    }

    return title;
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            {this.renderLink(stream)}
            <div className="description">
              {stream.description}
            </div>
          </div>
        </div>
      );
    })
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //Object.values() returns an array with the objects inside the parameters
  return {
    streams: Object.values(state.streams),
    currentId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, { listStreams })(StreamList);