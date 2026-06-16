export default function SOCFeed() {
  const logs=[
    "[SOC] Malware IOC detected",
    "[SOC] Failed login spike",
    "[SOC] Suspicious PowerShell execution",
    "[SOC] DNS tunneling attempt",
    "[SOC] Threat actor infrastructure detected"
  ];
  return(
    <div style={{
      background:"rgba(15,23,42,.75)",
      borderRadius:"16px",
      padding:"20px",
      marginTop:"20px"
    }}>
      <h2 style={{color:"#67e8f9"}}>Live SOC Activity</h2>
      {logs.map((l,i)=>(
        <div key={i} style={{
          color:"#cbd5e1",
          padding:"8px 0",
          borderBottom:"1px solid #1e293b"
        }}>{l}</div>
      ))}
    </div>
  );
}
