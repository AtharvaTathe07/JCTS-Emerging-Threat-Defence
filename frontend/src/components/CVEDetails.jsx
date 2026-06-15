export default function CVEDetails({ data }) {
  const cves = data?.recent_cves || [];

  const severityColor = (severity) => {
    if (severity === "Critical") return "#ef4444";
    if (severity === "High") return "#f97316";
    if (severity === "Medium") return "#eab308";
    return "#22c55e";
  };

  return (
    <div
      style={{
        background: "#0f172a",
        border: "1px solid #1e293b",
        borderRadius: "16px",
        padding: "20px",
        marginTop: "20px",
      }}
    >
      <h2 style={{ color: "white", marginBottom: "20px" }}>
        CVE Intelligence
      </h2>

      {cves.map((cve, index) => (
        <div
          key={index}
          style={{
            borderBottom: "1px solid #1e293b",
            padding: "15px 0",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <strong style={{ color: "#38bdf8" }}>
              {cve.id || cve}
            </strong>

            {cve.severity && (
              <span
                style={{
                  background: severityColor(cve.severity),
                  padding: "4px 10px",
                  borderRadius: "20px",
                  color: "white",
                  fontSize: "12px",
                }}
              >
                {cve.severity}
              </span>
            )}
          </div>

          {cve.score !== undefined && (
            <p style={{ color: "#94a3b8", marginTop: "8px" }}>
              CVSS Score: {cve.score}
            </p>
          )}

          {cve.description && (
            <p
              style={{
                color: "#cbd5e1",
                marginTop: "8px",
              }}
            >
              {cve.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
