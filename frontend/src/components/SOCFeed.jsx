import {useEffect,useState} from "react";

export default function SOCFeed(){
 const [logs,setLogs]=useState([
  "[SOC] Platform initialized"
 ]);

 useEffect(()=>{
  const events=[
   "Suspicious PowerShell Execution",
   "Credential Stuffing Attempt",
   "CVE Exploit Activity",
   "Malware Beacon Detected",
   "DNS Tunneling Alert",
   "Lateral Movement Indicator",
   "Privilege Escalation Attempt"
  ];

  const t=setInterval(()=>{
   setLogs(v=>[
    `[SOC] ${events[Math.floor(Math.random()*events.length)]}`,
    ...v
   ].slice(0,10));
  },3000);

  return()=>clearInterval(t);
 },[]);

 return(
  <div style={{
   background:"rgba(15,23,42,.55)",
   backdropFilter:"blur(20px)",
   borderRadius:"18px",
   padding:"20px",
   marginTop:"20px"
  }}>
   <h2 style={{color:"#67e8f9"}}>Live SOC Activity</h2>

   {logs.map((l,i)=>(
    <div key={i}
      style={{
       color:"#cbd5e1",
       padding:"8px 0",
       borderBottom:"1px solid #1e293b"
      }}
    >
     {l}
    </div>
   ))}
  </div>
 );
}
