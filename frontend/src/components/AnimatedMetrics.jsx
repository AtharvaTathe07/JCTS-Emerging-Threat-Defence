export default function AnimatedMetrics({ data }) {

  const cards = [
    ["Latest CVEs", data?.latest_cves || 0, "#06b6d4"],
    ["Critical CVEs", data?.critical_cves || 0, "#ef4444"],
    ["High Severity", data?.high_severity_cves || 0, "#f59e0b"],
    ["Feed Status", data?.feed_status || "offline", "#22c55e"]
  ];

  return (
    <div
      style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
        gap:"20px",
        marginBottom:"20px"
      }}
    >
      {cards.map(([title,value,color])=>(
        <div
          key={title}
          style={{
            background:"rgba(15,23,42,.8)",
            border:`1px solid ${color}`,
            borderRadius:"18px",
            padding:"20px",
            backdropFilter:"blur(12px)",
            boxShadow:`0 0 20px ${color}55`
          }}
        >
          <div style={{color:"#94a3b8"}}>
            {title}
          </div>

          <div
            style={{
              color,
              fontSize:"42px",
              fontWeight:"bold",
              marginTop:"10px"
            }}
          >
            {value}
          </div>
        </div>
      ))}
    </div>
  );
}
