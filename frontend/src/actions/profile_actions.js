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


export const fetchUserProfile = (userId) => (dispatch) =>
  APIProfileUtil.fetchUserProfile(userId)
    .then((user) => dispatch(receiveUserProfile(user)))
    .catch((err) => console.log(err));

export const createUserProfile = (user) => (dispatch) =>
  APIProfileUtil.createUserProfile(user)
    .then((user) => dispatch(receiveUserProfile(user)))
    .catch((err) => console.log(err));

export const updateUserProfile = (user) => (dispatch) =>
  APIProfileUtil.updateUserProfile(user)
    .then((user) => dispatch(receiveUserProfile(user)))
    .catch((err) => console.log(err));

export const deleteUserProfile = (userId) => (dispatch) =>
  APIProfileUtil.deleteUserProfile(userId)
    .then(() => dispatch(removeUserProfile(userId)))
    .catch((err) => console.log(err));
