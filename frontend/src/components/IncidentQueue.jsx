export default function IncidentQueue({incidents=[]}){

 const color=(s)=>{
  if(s==="Critical") return "#ef4444";
  if(s==="High") return "#f59e0b";
  return "#22c55e";
 };

 return(
  <div style={{
   background:"rgba(15,23,42,.85)",
   padding:"20px",
   borderRadius:"18px",
   marginTop:"20px"
  }}>
   <h2 style={{color:"#22d3ee"}}>
    Incident Response Queue
   </h2>

   <table width="100%" style={{marginTop:"15px"}}>
    <thead>
     <tr style={{color:"#94a3b8"}}>
      <th>ID</th>
      <th>Severity</th>
      <th>Status</th>
     </tr>
    </thead>

    <tbody>
     {incidents.map(i=>(
      <tr key={i.id}>
       <td style={{color:"white"}}>{i.id}</td>

       <td>
        <span
         style={{
          background:color(i.severity),
          color:"white",
          padding:"4px 10px",
          borderRadius:"20px"
         }}
        >
         {i.severity}
        </span>
       </td>

       <td style={{color:"#cbd5e1"}}>
        {i.status}
       </td>
      </tr>
     ))}
    </tbody>
   </table>
  </div>
 );
}
