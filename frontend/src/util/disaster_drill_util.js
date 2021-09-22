import axios from "axios";

export const fetchDisasterDrills = (planId) => {
  return axios.get(`/api/disaster_drills/index/${planId}`);
};

export const createDisasterDrill = (planId, disasterDrill) => {
  return axios.post(`/api/disaster_drills/create/${planId}`, disasterDrill);
};

export const updateDisasterDrill = (drillId, disasterDrill) => {
  return axios.put(`/api/disaster_drills/update/${drillId}`, disasterDrill);
};

export const deleteDisasterDrill = (drillId) => {
  return axios.delete(`/api/disaster_drills/delete/${drillId}`);
};