import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CreateRelativeContainer from './create_relative'

function Modal({modal, closeModal, id}){
  
    if(!modal){
        return null
    }
    let component; 
    switch(modal.modal){
        case 'createRelative':
            component = <CreateRelativeContainer />
            break;
        // case 'editRelative':
        //     component = <EditRelativeContainer />
        //     break;
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

const mDTP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(null, mDTP)(Modal);