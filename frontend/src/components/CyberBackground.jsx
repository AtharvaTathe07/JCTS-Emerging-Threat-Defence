import { useEffect, useState } from "react";

export default function CyberBackground() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 10);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -3,
          opacity: 0.35
        }}
      >
        <source src="/cyber-bg.mp4" type="video/mp4" />
      </video>

      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(2,6,23,0.55)",
          zIndex: -2
        }}
      />

      <div
        style={{
          position: "fixed",
          top: 15,
          right: 20,
          zIndex: 9999,
          padding: "12px 18px",
          borderRadius: "14px",
          background: "rgba(15,23,42,0.75)",
          backdropFilter: "blur(12px)",
          border: "1px solid #06b6d4",
          color: "#67e8f9",
          fontFamily: "monospace",
          boxShadow: "0 0 20px rgba(6,182,212,.5)"
        }}
      >
        <div style={{fontSize:"22px",fontWeight:"bold"}}>
          {now.toLocaleTimeString("en-GB",{hour12:false})}.
          {String(now.getMilliseconds()).padStart(3,"0")}
        </div>

        <div style={{marginTop:"4px",fontSize:"13px"}}>
          {now.toLocaleDateString("en-GB",{
            day:"2-digit",
            month:"long",
            year:"numeric"
          })}
        </div>

        <div style={{marginTop:"4px",fontSize:"12px"}}>
          Pune, Maharashtra, India
        </div>
      </div>
    </>
  );
}
