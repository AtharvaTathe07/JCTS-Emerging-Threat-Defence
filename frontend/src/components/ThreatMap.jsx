export default function ThreatMap() {
  const attacks = [
    "Russia → USA",
    "China → Germany",
    "North Korea → Japan",
    "Iran → UK",
    "Brazil → India"
  ];

  return (
    <div
      style={{
        background:"#0f172a",
        border:"1px solid #0ea5e9",
        borderRadius:"16px",
        padding:"20px",
        marginTop:"20px",
        boxShadow:"0 0 25px rgba(14,165,233,.3)"
      }}
    >
      <h2 style={{color:"#22d3ee"}}>Global Threat Map</h2>

      <div
        style={{
          height:"220px",
          background:
            "radial-gradient(circle at center,#0ea5e933,#020617)",
          borderRadius:"12px",
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          color:"#94a3b8",
          marginTop:"15px"
        }}
      >
        Live Attack Visualization
      </div>

      {attacks.map((a,i)=>(
        <div
          key={i}
          style={{
            color:"#f87171",
            marginTop:"10px"
          }}
        >
          {a}
        </div>
      ))}
    </div>
  );
}
