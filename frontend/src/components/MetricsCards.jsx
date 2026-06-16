import CountUp from "react-countup";

export default function MetricsCards({ data }) {
  const cards = [
    ["Latest CVEs", data?.latest_cves || 0],
    ["Critical CVEs", data?.critical_cves || 0],
    ["High Severity", data?.high_severity_cves || 0],
    ["Feed Status", data?.feed_status || "online"]
  ];

  return (
    <div
      style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
        gap:"20px"
      }}
    >
      {cards.map(([title,val])=>(
        <div
          key={title}
          style={{
            background:"rgba(15,23,42,.85)",
            borderRadius:"16px",
            padding:"20px",
            border:"1px solid #1e293b"
          }}
        >
          <div style={{color:"#94a3b8"}}>
            {title}
          </div>

          <div
            style={{
              color:"#67e8f9",
              fontSize:"42px",
              fontWeight:"bold",
              marginTop:"10px"
            }}
          >
            {typeof val === "number"
              ? <CountUp end={val} duration={2}/>
              : val}
          </div>
        </div>
      ))}
    </div>
  );
}
