export default function RecentCVEs({ data }) {
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
        Recent Vulnerabilities
      </h2>

      <table
        width="100%"
        style={{
          marginTop: "15px",
          color: "white",
        }}
      >
        <thead>
          <tr>
            <th align="left">CVE ID</th>
          </tr>
        </thead>

        <tbody>
          {cves.map((cve) => (
            <tr key={cve}>
              <td>{cve}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
