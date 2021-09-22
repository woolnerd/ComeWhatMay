import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CreateRelativeContainer from './create_relative';
import EditRelativeContainer from './edit_relative';
import UpdateProfileContainer from './edit_profile_form';

function Modal({modal, closeModal, id}){
  // debugger
    if(!modal){
        return null
    }
    let component; 

    switch(modal.modal){
      case 'createRelative':
        component = <CreateRelativeContainer profileId={modal.id}/>
        break;
      case 'editRelative':
        component = <EditRelativeContainer relativeId={modal.id} />
        break;
      case 'updateProfile':
        component = <UpdateProfileContainer profileId={modal.id} />
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