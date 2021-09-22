import axios from "axios";


export const createRelative = (relative) => {
    return axios.post("/api/relatives", relative);
}

export const fetchRelative = (relativeId) => {
  return axios.get(`/api/relatives/member/${relativeId}`);
};

export const fetchAllRelatives = (profileId) => {
  return axios.get(`/api/relatives/${profileId}`);
};

export const updateRelative = (relative) => {
  // debugger
  return axios.put(`/api/relatives/update/${relative._id}`, relative);
};

export const deleteRelative = (relativeId) => {
  return axios.delete(`/api/relatives/${relativeId}`);
};
