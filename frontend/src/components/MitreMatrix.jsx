export default function MitreMatrix(){

 const items=[
  ["Initial Access",9],
  ["Execution",8],
  ["Persistence",6],
  ["Privilege Escalation",7],
  ["Defense Evasion",8],
  ["Credential Access",9],
  ["Discovery",5],
  ["Lateral Movement",6],
  ["Collection",4],
  ["Exfiltration",7]
 ];

 return(
  <div style={{
   background:"rgba(15,23,42,.55)",
   backdropFilter:"blur(20px)",
   borderRadius:"18px",
   padding:"20px",
   marginTop:"20px"
  }}>
   <h2 style={{color:"#67e8f9"}}>MITRE ATT&CK Heatmap</h2>

   <div style={{
    display:"grid",
    gridTemplateColumns:"repeat(5,1fr)",
    gap:"10px"
   }}>
    {items.map(([n,v])=>(
      <div
       key={n}
       style={{
        background:`rgba(239,68,68,${v/10})`,
        color:"white",
        padding:"15px",
        borderRadius:"10px",
        minHeight:"70px"
       }}
      >
       {n}
      </div>
    ))}
   </div>
  </div>
 );
}
