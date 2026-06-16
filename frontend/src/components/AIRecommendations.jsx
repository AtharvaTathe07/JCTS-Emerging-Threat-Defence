export default function AIRecommendations(){
 const recs=[
  "Patch high severity CVEs immediately",
  "Enable MFA across all privileged accounts",
  "Review suspicious DNS activity",
  "Investigate lateral movement indicators",
  "Update endpoint detection signatures"
 ];
 return(
  <div style={{
   background:"rgba(15,23,42,.75)",
   padding:"20px",
   borderRadius:"16px",
   marginTop:"20px"
  }}>
   <h2 style={{color:"#67e8f9"}}>AI Incident Recommendations</h2>
   {recs.map((r,i)=>(
    <div key={i} style={{
      color:"#cbd5e1",
      padding:"8px 0"
    }}>• {r}</div>
   ))}
  </div>
 );
}
