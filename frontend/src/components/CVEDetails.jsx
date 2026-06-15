export default function CVEDetails({ data }) {
  const cves = data?.recent_cves || [];

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
      <h2 style={{ color: "white" }}>
        CVE Intelligence
      </h2>

      {cves.map((cve) => (
        <div
          key={cve}
          style={{
            padding: "10px",
            borderBottom: "1px solid #1e293b",
            color: "#cbd5e1",
          }}
        >
          {cve}
        </div>
      ))}
    </div>
  );
}
