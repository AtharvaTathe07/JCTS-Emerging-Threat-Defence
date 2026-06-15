export default function MetricsCards({ data }) {
  const cards = [
    {
      title: "Latest CVEs",
      value: data?.latest_cves ?? "-"
    },
    {
      title: "Critical CVEs",
      value: data?.critical_cves ?? "-"
    },
    {
      title: "High Severity",
      value: data?.high_severity_cves ?? "-"
    },
    {
      title: "Feed Status",
      value: data?.feed_status ?? "-"
    }
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        gap: "20px",
      }}
    >
      {cards.map((card) => (
        <div
          key={card.title}
          style={{
            background: "#0f172a",
            border: "1px solid #1e293b",
            borderRadius: "16px",
            padding: "20px",
          }}
        >
          <div
            style={{
              color: "#94a3b8",
              fontSize: "14px",
            }}
          >
            {card.title}
          </div>

          <div
            style={{
              color: "white",
              fontSize: "32px",
              fontWeight: "bold",
              marginTop: "10px",
            }}
          >
            {card.value}
          </div>
        </div>
      ))}
    </div>
  );
}
