import { Shield, Activity, AlertTriangle, BarChart3 } from "lucide-react";

export default function Sidebar() {
  const items = [
    { icon: <Shield size={18} />, label: "Dashboard" },
    { icon: <AlertTriangle size={18} />, label: "Threat Intel" },
    { icon: <Activity size={18} />, label: "Incidents" },
    { icon: <BarChart3 size={18} />, label: "Analytics" },
  ];

  return (
    <div
      style={{
        width: "240px",
        background: "#0f172a",
        borderRight: "1px solid #1e293b",
        padding: "20px",
        minHeight: "100vh",
      }}
    >
      <h2 style={{ color: "white" }}>
        JCTS Defence
      </h2>

      {items.map((item) => (
        <div
          key={item.label}
          style={{
            display: "flex",
            gap: "10px",
            color: "#cbd5e1",
            marginTop: "20px",
            cursor: "pointer",
          }}
        >
          {item.icon}
          {item.label}
        </div>
      ))}
    </div>
  );
}
