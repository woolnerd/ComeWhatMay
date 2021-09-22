import React from 'react';
import { connect } from 'react-redux'
import { fetchUserProfile, updateUserProfile, deleteUserProfile } from "../../actions/profile_actions"
import Profile from './profile';
import { openModal } from '../../actions/modal_actions';

const mSTP = ({entities, session}) => {
    // debugger
    return {
      profileId: Object.keys(entities.profile)[0],
      profile: entities.profile,
      currentUserId: session.user.id,
    };
    
}


const mDTP = dispatch => ({
    fetchUserProfile: (userId) => dispatch(fetchUserProfile(userId)),
    updateUserProfile: (profile) => dispatch(profile),
    deleteUserProfile: (profileId) => dispatch(profileId),
    openModal: (modal, id) => dispatch(openModal(modal, id))
})

export default connect(mSTP, mDTP)(Profile)
