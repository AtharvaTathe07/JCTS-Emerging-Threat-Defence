import {useState} from "react";

export default function CVEDetails({data}){

 const [search,setSearch]=useState("");

 const cves=(data?.recent_cves||[])
  .filter(c=>
   (c.id||"")
   .toLowerCase()
   .includes(search.toLowerCase())
  );

 return(
  <div style={{
   background:"rgba(15,23,42,.55)",
   backdropFilter:"blur(20px)",
   borderRadius:"18px",
   padding:"20px",
   marginTop:"20px"
  }}>
   <h2 style={{color:"#67e8f9"}}>CVE Intelligence</h2>

   <input
    value={search}
    onChange={e=>setSearch(e.target.value)}
    placeholder="Search CVE..."
    style={{
      width:"100%",
      padding:"12px",
      marginBottom:"15px",
      background:"#020617",
      color:"white",
      border:"1px solid #334155"
    }}
   />

   {cves.map((c,i)=>(
    <div key={i}
      style={{
       color:"#e2e8f0",
       padding:"12px",
       marginBottom:"10px",
       borderRadius:"10px",
       background:"rgba(255,255,255,.04)"
      }}
    >
      <strong>{c.id}</strong>
      <br/>
      Score: {c.score}
      <br/>
      Severity: {c.severity}
    </div>
   ))}
  </div>
 );
}
