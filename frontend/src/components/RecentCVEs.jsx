export default function RecentCVEs({ data }) {
  const cves = data?.recent_cves || [];

  return (
    <div
      style={{
        background:"rgba(15,23,42,.85)",
        borderRadius:"16px",
        padding:"20px",
        marginTop:"20px"
      }}
    >
      <h2 style={{color:"white"}}>Recent Vulnerabilities</h2>

      <table width="100%" style={{color:"white"}}>
        <thead>
          <tr>
            <th align="left">CVE ID</th>
            <th align="left">Severity</th>
            <th align="left">CVSS</th>
          </tr>
        </thead>

        <tbody>
          {cves.map((cve)=>(
            <tr key={cve.id}>
              <td>{cve.id}</td>
              <td>{cve.severity}</td>
              <td>{cve.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
