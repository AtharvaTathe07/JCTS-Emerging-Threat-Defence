import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import MetricsCards from "./components/MetricsCards";
import RecentCVEs from "./components/RecentCVEs";
import ThreatSeverityChart from "./components/ThreatSeverityChart";
import IncidentQueue from "./components/IncidentQueue";
import { getThreatData, getIncidents } from "./api";

export default function App() {
  const [data, setData] = useState(null);
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const threatData = await getThreatData();
        const incidentData = await getIncidents();

        setData(threatData);
        setIncidents(incidentData);
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    loadData();

    const interval = setInterval(loadData, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        background: "#020617",
        minHeight: "100vh",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          padding: "30px",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "38px",
            marginBottom: "10px",
          }}
        >
          JCTS Emerging Threat Defence
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "30px",
          }}
        >
          Live Threat Intelligence Dashboard
        </p>

        <MetricsCards data={data} />

        <div
          style={{
            marginTop: "25px",
          }}
        >
          <ThreatSeverityChart data={data} />
        </div>

        <RecentCVEs data={data} />

        <IncidentQueue incidents={incidents} />
      </div>
    </div>
  );
}
