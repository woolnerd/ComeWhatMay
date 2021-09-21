import axios from "axios";


export const createUserProfile = (profile) => {
    return axios.post("/api/profiles", profile);
}

export const fetchUserProfile = (userId) => {
  return axios.get(`/api/profiles/users/${userId}`);
};

export const updateUserProfile = (profile) => {
  console.log(profile)
  return axios.put(`/api/profiles/update/${profile._id}`, profile);
};

export const deleteUserProfile = (profileId) => {
  return axios.delete(`/api/profiles/${profileId}`);
};

export const testRoute = () => {
  return axios.get("/api/profiles/test")
}