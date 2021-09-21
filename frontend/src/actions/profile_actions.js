import * as APIProfileUtil from "../util/profile_util";


export const RECEIVE_USER_PROFILE = "RECEIVE_USER_PROFILE";
export const REMOVE_USER_PROFILE = "REMOVE_USER_PROFILE";

export const receiveUserProfile = (profile) => {
  // debugger
  return (

    {
      type: RECEIVE_USER_PROFILE,
      // profile: profile.data[profile.data.length-1]
      profile: profile.data
    }
  )
};

export const removeUserProfile = (profileId) => ({
    type: REMOVE_USER_PROFILE,
    profileId
})


export const fetchUserProfile = (profileId) => (dispatch) =>
  APIProfileUtil.fetchUserProfile(profileId)
    .then((profile) => dispatch(receiveUserProfile(profile)))
    .catch((err) => console.log(err));

export const createUserProfile = (profile) => (dispatch) =>
  APIProfileUtil.createUserProfile(profile)
    .then((profile) => dispatch(receiveUserProfile(profile)))
    .catch((err) => console.log(err));

export const updateUserProfile = (profile) => (dispatch) =>
  APIProfileUtil.updateUserProfile(profile)
    .then((profile) => dispatch(receiveUserProfile(profile)))
    .catch((err) => console.log(err));

export const deleteUserProfile = (profileId) => (dispatch) =>
  APIProfileUtil.deleteUserProfile(profileId)
    .then(() => dispatch(removeUserProfile(profileId)))
    .catch((err) => console.log(err));
