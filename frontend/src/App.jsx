import CyberBackground from "./components/CyberBackground";
import { useEffect, useState } from "react";
import MetricsCards from "./components/MetricsCards";
import AnimatedMetrics from "./components/AnimatedMetrics";
import RecentCVEs from "./components/RecentCVEs";
import ThreatSeverityChart from "./components/ThreatSeverityChart";
import IncidentQueue from "./components/IncidentQueue";
import CVEDetails from "./components/CVEDetails";
import ZeroTrustPanel from "./components/ZeroTrustPanel";
import PostQuantumPanel from "./components/PostQuantumPanel";
import ThreatMap from "./components/ThreatMap";
import WorldAttackSources from "./components/WorldAttackSources";
import LiveThreatTicker from "./components/LiveThreatTicker";
import MitreMatrix from "./components/MitreMatrix";
import SOCFeed from "./components/SOCFeed";
import AttackRadar from "./components/AttackRadar";
import ThreatHuntConsole from "./components/ThreatHuntConsole";
import ThreatHeatmap from "./components/ThreatHeatmap";
import AIRecommendations from "./components/AIRecommendations";
import EnterpriseSOCFeed from "./components/EnterpriseSOCFeed";
import CVESearchPanel from "./components/CVESearchPanel";
import EnterpriseHeatmap from "./components/EnterpriseHeatmap";
import { getThreatData } from "./api";
import { jsPDF } from "jspdf";

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

  const exportPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("JCTS Incident Report", 20, 20);

    doc.setFontSize(12);
    doc.text("Generated: " + new Date().toLocaleString(), 20, 35);

    doc.text("INC-1001  Critical  Investigating", 20, 55);
    doc.text("INC-1002  High      Containment", 20, 70);
    doc.text("INC-1003  Medium    Monitoring", 20, 85);

    doc.save("JCTS-Incident-Report.pdf");
  };

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
        cursor: "pointer"
      }}
    >
      {label}
    </button>
  );

  return (
    <>
      <CyberBackground />

      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          background: "transparent"
        }}
      >
        <div
          style={{
            width: "240px",
            background: "rgba(15,23,42,.8)",
            backdropFilter: "blur(10px)",
            padding: "20px",
            borderRight: "1px solid #1e293b"
          }}
        >
          <h2 style={{ color: "white" }}>JCTS Defence</h2>

          <MenuButton label="Dashboard" keyName="dashboard" />
          <MenuButton label="Threat Intel" keyName="intel" />
          <MenuButton label="Incidents" keyName="incidents" />
          <MenuButton label="Analytics" keyName="analytics" />
        </div>

        <div style={{ flex: 1, padding: "30px" }}>
          <h1 style={{ color: "white" }}>
            JCTS Emerging Threat Defence
          </h1>

          <p style={{ color: "#94a3b8" }}>
            Live Threat Intelligence Dashboard
          </p>

          <LiveThreatTicker />

          {page === "dashboard" && (
            <>
              <AnimatedMetrics data={data} />
              <ThreatMap />
              <WorldAttackSources />
              <AttackRadar />
              <SOCFeed />
<EnterpriseSOCFeed />
            </>
          )}

          {page === "intel" && (
            <>
              <RecentCVEs data={data} />
              <CVEDetails data={data} />
<CVESearchPanel data={data} />
              <ThreatHuntConsole />
            </>
          )}

          {page === "incidents" && (
            <>
              <IncidentQueue />

              <button
                onClick={exportPDF}
                style={{
                  marginTop: "20px",
                  padding: "12px 20px",
                  background: "#06b6d4",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "bold"
                }}
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
              <MitreMatrix />
              <ThreatHeatmap />
<EnterpriseHeatmap />
              <AIRecommendations />
            </>
          )}
        </div>
      </div>
    </>
  );
}
