import * as APIRelativeUtil from "../util/relative_util";


export const RECEIVE_ALL_RELATIVES = "RECEIVE_ALL_RELATIVES";
export const RECEIVE_RELATIVE = "RECEIVE_RELATIVE";
export const CLEAR_RELATIVE_ERRORS = "CLEAR_RELATIVE_ERRORS";
export const REMOVE_RELATIVE = "REMOVE_RELATIVE";
export const RECEIVE_RELATIVE_ERRORS = "RECEIVE_RELATIVE_ERRORS";


export const receiveRelative = (relative) => ({
    type: RECEIVE_RELATIVE,
    relative
});

export const receiveAllRelatives = (relatives) => ({
    type: RECEIVE_ALL_RELATIVES,
    relatives
});

export const clearRelativeErrors = () => ({
  type: CLEAR_RELATIVE_ERRORS
})

export const receiveErrors = errors => ({
  type: RECEIVE_RELATIVE_ERRORS,
  errors
});

export const removeRelative = (relativeId) => ({
    type: REMOVE_RELATIVE,
    relativeId
})

export const fetchRelative = (relativeId) => (dispatch) =>
  APIRelativeUtil.fetchRelative(relativeId)
    .then((relative) => dispatch(receiveRelative(relative)))
    .catch((err) => console.log(err));

export const fetchAllRelatives = (profileId) => (dispatch) =>
  APIRelativeUtil.fetchAllRelatives(profileId)
    .then((relatives) => dispatch(receiveAllRelatives(relatives)))
    .catch((err) => console.log(err));

export const createRelative = (relative) => (dispatch) =>
  APIRelativeUtil.createRelative(relative)
    .then((relative) => dispatch(receiveRelative(relative)))
    .catch(err => {
      dispatch(receiveErrors(err.response.data));
    })

export const updateRelative = (relative) => (dispatch) =>
  APIRelativeUtil.updateRelative(relative)
    .then((relative) => dispatch(receiveRelative(relative)))
    .catch(err => {
      dispatch(receiveErrors(err.response.data));
    })

export const deleteRelative = (relativeId) => (dispatch) =>
  APIRelativeUtil.deleteRelative(relativeId)
    .then(() => dispatch(removeRelative(relativeId)))
    .catch((err) => console.log(err));
