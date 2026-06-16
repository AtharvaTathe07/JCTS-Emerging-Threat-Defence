export default function EnterpriseHeatmap(){

 const values=[
  2,4,7,9,5,3,8,6,
  5,2,9,8,7,5,4,6,
  8,9,4,2,1,3,6,8,
  5,7,8,9,5,4,3,2
 ];

 return(
  <div style={{
   background:"rgba(15,23,42,.8)",
   borderRadius:"18px",
   padding:"20px",
   marginTop:"20px"
  }}>
   <h2 style={{color:"#22d3ee"}}>
    Threat Severity Heatmap
   </h2>

   <div style={{
    display:"grid",
    gridTemplateColumns:"repeat(8,1fr)",
    gap:"8px",
    marginTop:"15px"
   }}>
   {values.map((v,i)=>(
    <div
      key={i}
      title={"Threat Score "+v}
      style={{
       height:"45px",
       borderRadius:"8px",
       background:`rgba(239,68,68,${v/10})`
      }}
    />
   ))}
   </div>
  </div>
 );
}
