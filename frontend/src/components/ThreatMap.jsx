import { useEffect, useState } from "react";

export default function ThreatMap(){
 const [n,setN]=useState(0);

 useEffect(()=>{
  const t=setInterval(()=>setN(v=>v+1),1000);
  return ()=>clearInterval(t);
 },[]);

 return(
  <div style={{
   background:"rgba(15,23,42,.55)",
   backdropFilter:"blur(20px)",
   border:"1px solid rgba(255,255,255,.1)",
   borderRadius:"18px",
   padding:"20px",
   marginTop:"20px"
  }}>
   <h2 style={{color:"#67e8f9"}}>Global Attack Visualization</h2>

   <div style={{
    position:"relative",
    height:"420px",
    overflow:"hidden",
    borderRadius:"12px",
    background:"#020617"
   }}>
    <iframe
      src="https://www.openstreetmap.org/export/embed.html"
      style={{
       width:"100%",
       height:"100%",
       border:"none",
       opacity:.7
      }}
    />

    <div style={{
      position:"absolute",
      top:50+(n%120),
      left:"10%",
      width:"80%",
      height:"2px",
      background:"#ef4444",
      boxShadow:"0 0 20px red"
    }}/>

    <div style={{
      position:"absolute",
      top:140+((n*2)%150),
      left:"15%",
      width:"60%",
      height:"2px",
      background:"#06b6d4",
      boxShadow:"0 0 20px cyan"
    }}/>
   </div>
  </div>
 );
}
