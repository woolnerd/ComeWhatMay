import React from 'react';
import { connect } from 'react-redux'
import { fetchUserProfile, updateUserProfile, deleteUserProfile } from "../../actions/profile_actions"
import Profile from './profile';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router';


const mSTP = ({entities, session}, ownProps) => {
    return {
      // profileId: Object.keys(entities.profile)[0],
      profileId: ownProps.match.params.profileId, 
      profile: entities.profile,
      currentUserId: session.user.id,

      // household: Object.values()
    };
    
}


const mDTP = dispatch => ({

    // fetchAllRelatives: (relatives) => dispatch
    fetchUserProfile: (userId) => dispatch(fetchUserProfile(userId)),
    updateUserProfile: (profile) => dispatch(profile),
    deleteUserProfile: (profileId) => dispatch(profileId),
    openModal: (modal, id) => dispatch(openModal(modal, id))
})

export default withRouter(connect(mSTP, mDTP)(Profile))
