import axios from "axios";


export const createUser = (user) => {
    return axios.post("/api/users/", user);
}

export const fetchUser = (userId) => {
  return axios.get("/api/users/:userId", userId);
};

export const updateUser = (userData) => {
  return axios.put("/api/users/", userData);
};

export const deleteUser = (userId) => {
  return axios.destroy("/api/users/:userId", userId);
};
