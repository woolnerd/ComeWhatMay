import axios from "axios";

export const fetchDisasterPlans = (profileId) => {
  return axios.get(`/api/disaster_plans/index/${profileId}`);
};

export const createDisasterPlan = (profileId, disasterPlan) => {
  return axios.post(`/api/disaster_plans/create/${profileId}`, disasterPlan);
};

export const updateDisasterPlan = (disasterPlan) => {
  return axios.put(`/api/disaster_plans/update/${disasterPlan._id}`, disasterPlan);
};

export const deleteDisasterPlan = (disasterPlanId) => {
  return axios.delete(`/api/disaster_plans/delete/${disasterPlanId}`);
};