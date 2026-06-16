import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function ThreatSeverityChart({ data }) {
  const chartData = [
    {
      name: "Critical",
      value: data?.critical_cves || 15,
    },
    {
      name: "High",
      value: data?.high_severity_cves || 42,
    },
    {
      name: "Other",
      value:
        (data?.latest_cves || 0) -
        (data?.critical_cves || 0) -
        (data?.high_severity_cves || 0),
    },
  ];

  const COLORS = ["#ef4444", "#f59e0b", "#22c55e"];

  return (
    <div
      style={{
        background: "#0f172a",
        border: "1px solid #1e293b",
        borderRadius: "16px",
        padding: "20px",
        height: "350px",
      }}
    >
      <h2 style={{ color: "white" }}>
        Threat Severity
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            outerRadius={100}
          >
            {chartData.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
