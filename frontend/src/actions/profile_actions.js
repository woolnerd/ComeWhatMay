import * as APIProfileUtil from "../util/profile_util";


export const RECEIVE_USER_PROFILE = "RECEIVE_USER_PROFILE";
export const REMOVE_USER_PROFILE = "REMOVE_USER_PROFILE";

export const receiveUserProfile = (profile) => ({
    type: RECEIVE_USER_PROFILE,
    profile
});

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

export const updateUserProfile = (user) => (dispatch) =>
  APIProfileUtil.updateUserProfile(user)
    .then((user) => dispatch(receiveUserProfile(user)))
    .catch((err) => console.log(err));

export const deleteUserProfile = (userId) => (dispatch) =>
  APIProfileUtil.deleteUserProfile(userId)
    .then(() => dispatch(removeUserProfile(userId)))
    .catch((err) => console.log(err));
