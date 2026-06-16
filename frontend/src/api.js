import axios from "axios";

export const getThreatData = async () => {
  const r = await axios.get("https://jcts-enterprise-soc-production.up.railway.app/api/threats");
  return r.data;
};

export const getIncidents = async () => {
  const r = await axios.get("https://jcts-enterprise-soc-production.up.railway.app/api/incidents");
  return r.data;
};
