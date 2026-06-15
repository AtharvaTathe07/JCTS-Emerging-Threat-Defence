import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import MetricsCards from "./components/MetricsCards";
import RecentCVEs from "./components/RecentCVEs";
import ThreatSeverityChart from "./components/ThreatSeverityChart";
import IncidentQueue from "./components/IncidentQueue";
import CVEDetails from "./components/CVEDetails";
import ZeroTrustPanel from "./components/ZeroTrustPanel";
import PostQuantumPanel from "./components/PostQuantumPanel";
import ThreatMap from "./components/ThreatMap";
import WorldAttackSources from "./components/WorldAttackSources";
import LiveThreatTicker from "./components/LiveThreatTicker";
import { getThreatData } from "./api";

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await getThreatData();
        setData(result);
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
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#020617,#0f172a,#082f49)",
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
            color: "#22d3ee",
            fontSize: "42px",
            textShadow: "0 0 20px #22d3ee",
          }}
        >
          JCTS Emerging Threat Defence
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "20px",
          }}
        >
          Live Threat Intelligence Dashboard
        </p>

        <LiveThreatTicker />

        <MetricsCards data={data} />

        <div style={{ marginTop: "25px" }}>
          <ThreatSeverityChart data={data} />
        </div>

        <ThreatMap />

        <WorldAttackSources />

        <RecentCVEs data={data} />

        <CVEDetails data={data} />

        <IncidentQueue />

        <ZeroTrustPanel />

        <PostQuantumPanel />
      </div>
    </div>
  );
}
