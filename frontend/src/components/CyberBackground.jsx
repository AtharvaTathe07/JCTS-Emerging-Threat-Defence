import { useEffect,useState } from "react";

export default function CyberBackground(){

  const [now,setNow]=useState(new Date());

  useEffect(()=>{
    const t=setInterval(()=>setNow(new Date()),100);
    return ()=>clearInterval(t);
  },[]);

  return(
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          position:"fixed",
          top:0,
          left:0,
          width:"100vw",
          height:"100vh",
          objectFit:"cover",
          zIndex:-9999,
          opacity:1
        }}
      >
        <source src="/cyber-bg.mp4" type="video/mp4"/>
      </video>

      <div
        style={{
          position:"fixed",
          inset:0,
          background:"rgba(0,0,0,.15)",
          zIndex:-9998
        }}
      />

      <div
        style={{
          position:"fixed",
          top:15,
          right:20,
          zIndex:99999,
          padding:"10px 15px",
          borderRadius:"10px",
          background:"rgba(0,0,0,.45)",
          color:"#67e8f9",
          fontFamily:"monospace"
        }}
      >
        {now.toLocaleTimeString()}
      </div>
    </>
  );
}
