export default function MitreMatrix() {
  const tactics = [
    "Recon","Resource Dev","Initial Access","Execution",
    "Persistence","Privilege Esc","Defense Evasion",
    "Credential Access","Discovery","Lateral Movement",
    "Collection","Exfiltration","Impact"
  ];
  return (
    <div style={{
      background:"rgba(15,23,42,.75)",
      backdropFilter:"blur(10px)",
      border:"1px solid #1e293b",
      borderRadius:"16px",
      padding:"20px",
      marginTop:"20px"
    }}>
      <h2 style={{color:"#67e8f9"}}>MITRE ATT&CK Matrix</h2>
      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(4,1fr)",
        gap:"10px"
      }}>
        {tactics.map(t=>(
          <div key={t} style={{
            padding:"12px",
            background:"#0f172a",
            borderRadius:"10px",
            color:"white",
            textAlign:"center"
          }}>{t}</div>
        ))}
      </div>
    </div>
  );
}
