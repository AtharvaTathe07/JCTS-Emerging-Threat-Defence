import axios from "axios";

const API_BASE =
  "https://automatic-bassoon-wvrg65w57gqwhvr9-8000.app.github.dev";

export const getThreatData = async () => {
  const response = await axios.get(`${API_BASE}/api/threats`);
  return response.data;
};

export const getIncidents = async () => {
  const response = await axios.get(`${API_BASE}/api/incidents`);
  return response.data;
};
