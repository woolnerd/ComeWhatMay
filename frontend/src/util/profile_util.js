import axios from "axios";


export const createUserProfile = (profile) => {
    return axios.post("/api/profiles", profile);
}

export const fetchUserProfile = (profileId) => {
  // debugger
  return axios.get(`/api/profiles/${profileId}`);
};

export const updateUserProfile = (profile) => {
  return axios.put("/api/users/", profile);
};

export const deleteUserProfile = (profileId) => {
  return axios.destroy(`/api/users/${profileId}`);
};

export const testRoute = () => {
  return axios.get("/api/profiles/test")
}