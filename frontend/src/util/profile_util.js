import axios from "axios";


export const createUserProfile = (user) => {
    return axios.post("/api/users/", user);
}

export const fetchUserProfile = (userId) => {
  return axios.get("/api/users/:userId", userId);
};

export const updateUserProfile = (userData) => {
  return axios.put("/api/users/", userData);
};

export const deleteUserProfile = (userId) => {
  return axios.destroy("/api/users/:userId", userId);
};
