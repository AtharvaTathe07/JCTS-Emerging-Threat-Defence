import { useState } from "react";

export default function CVESearchPanel({data}){

 const [query,setQuery]=useState("");

 const rows=(data?.recent_cves||[]).filter(
  c=>
   (c.id||"")
   .toLowerCase()
   .includes(query.toLowerCase())
 );

 return(
  <div style={{
   background:"rgba(15,23,42,.8)",
   borderRadius:"18px",
   padding:"20px",
   marginTop:"20px"
  }}>
   <h2 style={{color:"#22d3ee"}}>
    CVE Search
   </h2>

   <input
    value={query}
    onChange={e=>setQuery(e.target.value)}
    placeholder="Search CVE..."
    style={{
      width:"100%",
      padding:"12px",
      marginTop:"10px",
      background:"#020617",
      color:"white",
      border:"1px solid #334155"
    }}
   />

   {rows.map(c=>(
    <div
      key={c.id}
      style={{
       marginTop:"10px",
       color:"#cbd5e1"
      }}
    >
      {c.id}
    </div>
   ))}
  </div>
 );
}
