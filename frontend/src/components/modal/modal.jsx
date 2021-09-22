import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CreateRelativeContainer from './create_relative';

function Modal({modal, closeModal, id}){
  // debugger
    if(!modal){
        return null
    }
    let component; 

    switch(modal.modal){
      case 'createRelative':
        debugger
        component = <CreateRelativeContainer />
        break;
      default: 
        return null;
    }

    return (
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
  );
}

const mSTP = state => {
  return {
    modal: state.modal 
  };
};

const mDTP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mSTP, mDTP)(Modal);