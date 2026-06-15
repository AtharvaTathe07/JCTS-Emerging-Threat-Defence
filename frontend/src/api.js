import axios from "axios";

export const getThreatData = async () => {
  const response = await axios.get("/api/threats");
  return response.data;
};
