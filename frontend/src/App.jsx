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
  const [page, setPage] = useState("dashboard");

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await getThreatData();
        setData(result);
      } catch (e) {
        console.error(e);
      }
    };

    loadData();
    const interval = setInterval(loadData, 60000);
    return () => clearInterval(interval);
  }, []);

  const MenuButton = ({ label, keyName }) => (
    <button
      onClick={() => setPage(keyName)}
      style={{
        width: "100%",
        padding: "12px",
        marginBottom: "10px",
        background: page === keyName ? "#06b6d4" : "#0f172a",
        color: "white",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );

  return (
    <div style={{ display: "flex", minHeight: "100vh", background:"#020617" }}>
      <div style={{
        width:"240px",
        background:"#0f172a",
        padding:"20px",
        borderRight:"1px solid #1e293b"
      }}>
        <h2 style={{color:"white"}}>JCTS Defence</h2>

        <MenuButton label="Dashboard" keyName="dashboard" />
        <MenuButton label="Threat Intel" keyName="intel" />
        <MenuButton label="Incidents" keyName="incidents" />
        <MenuButton label="Analytics" keyName="analytics" />
      </div>

      <div style={{flex:1,padding:"30px"}}>
        <h1 style={{color:"white"}}>
          JCTS Emerging Threat Defence
        </h1>

        <p style={{color:"#94a3b8"}}>
          Live Threat Intelligence Dashboard
        </p>

        <LiveThreatTicker />

        {page === "dashboard" && (
          <>
            <MetricsCards data={data} />
            <ThreatMap />
            <WorldAttackSources />
          </>
        )}

        {page === "intel" && (
          <>
            <RecentCVEs data={data} />
            <CVEDetails data={data} />
          </>
        )}

        {page === "incidents" && (
          <>
            <IncidentQueue />

            <button
              style={{
                marginTop:"20px",
                padding:"12px 20px",
                background:"#06b6d4",
                border:"none",
                borderRadius:"10px",
                cursor:"pointer"
              }}
              onClick={() =>
                alert("PDF export endpoint will be connected next")
              }
            >
              Export Incident Report PDF
            </button>
          </>
        )}

        {page === "analytics" && (
          <>
            <ThreatSeverityChart data={data} />
            <ZeroTrustPanel />
            <PostQuantumPanel />
          </>
        )}
      </div>
    </div>
  );
}
