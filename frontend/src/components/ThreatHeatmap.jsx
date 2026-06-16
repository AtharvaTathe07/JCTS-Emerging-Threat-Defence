export default function ThreatHeatmap(){
 const cells=new Array(40).fill(0);
 return(
  <div style={{
   background:"rgba(15,23,42,.75)",
   padding:"20px",
   borderRadius:"16px",
   marginTop:"20px"
  }}>
   <h2 style={{color:"#67e8f9"}}>Threat Heatmap</h2>
   <div style={{
    display:"grid",
    gridTemplateColumns:"repeat(8,1fr)",
    gap:"6px"
   }}>
   {cells.map((_,i)=>(
    <div key={i}
     style={{
      height:"40px",
      borderRadius:"6px",
      background:`rgba(239,68,68,${Math.random()})`
     }}
    />
   ))}
   </div>
  </div>
 );
}
