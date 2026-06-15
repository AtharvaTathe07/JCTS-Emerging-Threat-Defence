export default function ZeroTrustPanel() {
  return (
    <div
      style={{
        background:"#0f172a",
        border:"1px solid #22d3ee",
        borderRadius:"16px",
        padding:"20px",
        marginTop:"20px",
        boxShadow:"0 0 20px rgba(34,211,238,.25)"
      }}
    >
      <h2 style={{color:"#22d3ee"}}>
        Zero Trust Architecture
      </h2>

      <ul style={{color:"white"}}>
        <li>Identity Verification Active</li>
        <li>MFA Enforcement Enabled</li>
        <li>Least Privilege Access</li>
        <li>Continuous Monitoring</li>
      </ul>
    </div>
  );
}
