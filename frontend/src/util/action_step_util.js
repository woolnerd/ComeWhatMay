import axios from "axios";

export const createActionStep = (planId, actionStep) => {
  return axios.post(`/api/disaster_plans/${planId}/action/create`, actionStep);
};

export const updateActionStep = (planId, actionStep) => {
  return axios.put(`/api/disaster_plans/${planId}/action/update/${actionStep._id}`, actionStep);
};

export const deleteActionStep = (planId, stepId) => {
  return axios.delete(`/api/disaster_plans/${planId}/action/delete/${stepId}`);
};