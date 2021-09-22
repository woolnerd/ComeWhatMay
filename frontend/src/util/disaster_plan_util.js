import axios from "axios";

export const fetchDisasterPlans = (profileId) => {
  return axios.get(`/api/disaster_plans/${profileId}`);
};

export const createDisasterPlan = (profileId, disasterPlan) => {
  return axios.post(`/api/disaster_plans/${profileId}`, disasterPlan);
};

export const updateDisasterPlan = (disasterPlan) => {
  return axios.put(`/api/disaster_plans/${disasterPlan.id}`, disasterPlan);
};

export const deleteDisasterPlan = (disasterPlanId) => {
  return axios.destroy("/api/disaster_plans/", disasterPlanId);
};
