import axios from "axios";

const API_BASE="http://localhost:8000";

export const getThreatData = async()=>{
 const r=await axios.get(`${API_BASE}/api/threats`);
 return r.data;
};

export const getIncidents = async()=>{
 const r=await axios.get(`${API_BASE}/api/incidents`);
 return r.data;
};
