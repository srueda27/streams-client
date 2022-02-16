import React from "react";
import ReactDOM from 'react-dom';

const Modal = props => {
  return ReactDOM.createPortal(
    <div
      onClick={props.onSubmit}
      className="ui dimmer modals visible active"
    >
      {/* e.stopPropagation prevents the onClick event activated the parent onClick event */}
      <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
        <div className="header">{props.header}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.getElementById('modal')
  );
}

export default Modal;