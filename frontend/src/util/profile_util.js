import axios from "axios";


export const createUserProfile = (profile) => {
    return axios.post("/api/profiles", profile);
}

export const fetchUserProfile = (profileId) => {
  return axios.get(`/api/profiles/${profileId}`);
};

export const updateUserProfile = (profile) => {
  console.log(profile)
  return axios.put(`/api/profiles/update/${profile._id}`, {params: profile});
};

export const deleteUserProfile = (profileId) => {
  return axios.delete(`/api/profiles/${profileId}`);
};

export const testRoute = () => {
  return axios.get("/api/profiles/test")
}