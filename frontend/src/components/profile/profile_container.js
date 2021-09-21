import React from 'react';
import { connect } from 'react-redux'
import { fetchUserProfile, updateUserProfile, deleteUserProfile } from "../../actions/profile_actions"
import Profile from './profile';

const mSTP = ({entities, session}, ownProps) => {
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
    deleteUserProfile: (profileId) => dispatch(profileId)
})

export default connect(mSTP, mDTP)(Profile)
