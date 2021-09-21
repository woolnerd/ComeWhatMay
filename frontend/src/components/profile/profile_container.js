import React from 'react';
import { connect } from 'react-redux'
import { fetchUserProfile, updateUserProfile, deleteUserProfile } from "../../actions/profile_actions"
import Profile from './profile';

const mSTP = ({entities}) => {
    debugger
    return 
    
    profile: Object.values(entities.profile.data)
    
}


const mDTP = dispatch => ({
    fetchUserProfile: () => dispatch(fetchUserProfile),
    updateUserProfile: () => dispatch(updateUserProfile),
    deleteUserProfile: () => dispatch(deleteUserProfile)
})

export default connect(mSTP, mDTP)(Profile)
