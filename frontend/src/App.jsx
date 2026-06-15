import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import MetricsCards from "./components/MetricsCards";
import RecentCVEs from "./components/RecentCVEs";
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

        <RecentCVEs data={data} />
      </div>
    </div>
  );
}
