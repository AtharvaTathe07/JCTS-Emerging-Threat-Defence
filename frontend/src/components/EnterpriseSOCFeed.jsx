import { useEffect, useState } from "react";

export default function EnterpriseSOCFeed(){

 const logs=[
  "Malware IOC detected",
  "Privilege escalation attempt",
  "Suspicious PowerShell execution",
  "Credential stuffing attack",
  "DNS tunneling activity",
  "Lateral movement indicators",
  "Zero-day exploit observed",
  "Data exfiltration attempt"
 ];

 const [feed,setFeed]=useState([]);

 useEffect(()=>{
  const t=setInterval(()=>{
   setFeed(f=>[
    {
      id:Date.now(),
      msg:logs[Math.floor(Math.random()*logs.length)]
    },
    ...f
   ].slice(0,10));
  },2500);

  return()=>clearInterval(t);
 },[]);

 return(
  <div style={{
   background:"rgba(15,23,42,.8)",
   borderRadius:"18px",
   padding:"20px",
   marginTop:"20px"
  }}>
   <h2 style={{color:"#22d3ee"}}>
    Live SOC Analyst Feed
   </h2>

   {feed.map(i=>(
    <div
      key={i.id}
      style={{
       color:"#cbd5e1",
       padding:"10px",
       borderBottom:"1px solid #1e293b"
      }}
    >
      [{new Date(i.id).toLocaleTimeString()}] {i.msg}
    </div>
   ))}
  </div>
 );
}
