import {useState} from "react";
export default function ThreatHuntConsole(){
 const [q,setQ]=useState("");
 return(
  <div style={{
   background:"rgba(15,23,42,.75)",
   padding:"20px",
   borderRadius:"16px",
   marginTop:"20px"
  }}>
   <h2 style={{color:"#67e8f9"}}>Threat Hunting Console</h2>
   <input
    value={q}
    onChange={e=>setQ(e.target.value)}
    placeholder="search IOC, IP, CVE..."
    style={{
     width:"100%",
     padding:"12px",
     background:"#020617",
     color:"white",
     border:"1px solid #334155"
    }}
   />
  </div>
 );
}
