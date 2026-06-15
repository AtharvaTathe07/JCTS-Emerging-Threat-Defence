import {
  Shield,
  AlertTriangle,
  Globe,
  Activity,
  Server,
  Radar,
  Lock
} from "lucide-react";

export default function App() {
  const cards = [
    {
      title: "Active Threats",
      value: "127",
      icon: <AlertTriangle size={28} />
    },
    {
      title: "Blocked Attacks",
      value: "4,821",
      icon: <Shield size={28} />
    },
    {
      title: "Threat Sources",
      value: "43",
      icon: <Globe size={28} />
    },
    {
      title: "System Health",
      value: "98%",
      icon: <Activity size={28} />
    }
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        padding: "25px",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <h1
        style={{
          color: "#ffffff",
          fontSize: "42px",
          fontWeight: "bold"
        }}
      >
        JCTS Emerging Threat Defence
      </h1>

      <p style={{ color: "#94a3b8" }}>
        AI Powered Threat Intelligence & Incident Response Platform
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginTop: "30px"
        }}
      >
        {cards.map((card) => (
          <div
            key={card.title}
            style={{
              background: "#0f172a",
              border: "1px solid #1e293b",
              borderRadius: "18px",
              padding: "20px"
            }}
          >
            <div style={{ color: "#22d3ee" }}>
              {card.icon}
            </div>

            <h3 style={{ color: "#cbd5e1" }}>
              {card.title}
            </h3>

            <h2
              style={{
                color: "#ffffff",
                fontSize: "38px"
              }}
            >
              {card.value}
            </h2>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "20px",
          marginTop: "25px"
        }}
      >
        <div
          style={{
            background: "#0f172a",
            borderRadius: "18px",
            padding: "20px"
          }}
        >
          <h2 style={{ color: "#ffffff" }}>
            Threat Monitoring Center
          </h2>

          <p><Radar size={16}/> Malware Threats: 42</p>
          <p><Lock size={16}/> Phishing Attempts: 23</p>
          <p><Server size={16}/> Network Anomalies: 17</p>
          <p><Shield size={16}/> Blocked Connections: 4821</p>
        </div>

        <div
          style={{
            background: "#0f172a",
            borderRadius: "18px",
            padding: "20px"
          }}
        >
          <h2 style={{ color: "#ffffff" }}>
            Critical Alerts
          </h2>

          <p>🚨 Critical Malware Activity</p>
          <p>🚨 Suspicious Login Attempt</p>
          <p>🚨 Ransomware Signature Match</p>
          <p>🚨 High Risk Domain Access</p>
        </div>
      </div>
    </div>
  );
}
