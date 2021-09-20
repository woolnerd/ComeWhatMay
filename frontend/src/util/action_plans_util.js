import axios from "axios";

export const createActionPlan = (actionPlan) => {
  return axios.post("/api/actionPlans/", actionPlan);
};

export const fetchActionPlan = (actionPlanId) => {
  return axios.get("/api/actionPlans/:ActionPlanId", actionPlanId);
};

export const updateActionPlan = (actionPlanData) => {
  return axios.put("/api/actionPlans/", actionPlanData);
};

export const deleteActionPlan = (actionPlanId) => {
  return axios.destroy("/api/actionPlans/:ActionPlanId", actionPlanId);
};
