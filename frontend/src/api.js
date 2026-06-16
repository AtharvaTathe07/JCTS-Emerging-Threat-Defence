import axios from "axios";

export const getThreatData = async () => {
  const r = await axios.get("/api/threats");
  return r.data;
};

export const getIncidents = async () => {
  const r = await axios.get("/api/incidents");
  return r.data;
};
