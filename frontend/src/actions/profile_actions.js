import * as APIProfileUtil from "../util/profile_util";


export const RECEIVE_USER_PROFILE = "RECEIVE_USER_PROFILE";
export const REMOVE_USER_PROFILE = "REMOVE_USER_PROFILE";
export const RECEIVE_PROFILE_ERRORS = "RECEIVE_PROFILE_ERRORS";


export const receiveUserProfile = (profile) => {
  profile = Array.isArray(profile.data) ? profile.data[profile.data.length-1] : profile.data
  return (
    {
      type: RECEIVE_USER_PROFILE,
      profile
    }
  )
};

export const removeUserProfile = (profileId) => ({
    type: REMOVE_USER_PROFILE,
    profileId
})

export const receiveErrors = errors => ({
  type: RECEIVE_PROFILE_ERRORS,
  errors
});


export const fetchUserProfile = (userId) => (dispatch) =>
  APIProfileUtil.fetchUserProfile(userId)
    .then((profile) => dispatch(receiveUserProfile(profile)))
    .catch((err) => console.log(err));

export const createUserProfile = (profile) => (dispatch) =>
  APIProfileUtil.createUserProfile(profile)
    .then((profile) => dispatch(receiveUserProfile(profile)))
    .catch(err => {
      dispatch(receiveErrors(err.response.data));
    })

export const updateUserProfile = (profile) => (dispatch) =>
  APIProfileUtil.updateUserProfile(profile)
    .then((profile) => dispatch(receiveUserProfile(profile)))
    .catch(err => {
      dispatch(receiveErrors(err.response.data));
    })

export const deleteUserProfile = (profileId) => (dispatch) =>
  APIProfileUtil.deleteUserProfile(profileId)
    .then(() => dispatch(removeUserProfile(profileId)))
    .catch((err) => console.log(err));
