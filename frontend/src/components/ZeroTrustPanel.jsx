export default function ZeroTrustPanel() {
  const controls = [
    "Multi-Factor Authentication",
    "Device Verification",
    "Least Privilege Access",
    "Continuous Monitoring",
    "Micro-Segmentation"
  ];

  return (
    <div
      style={{
        background: "#0f172a",
        border: "1px solid #1e293b",
        borderRadius: "16px",
        padding: "20px",
        marginTop: "20px"
      }}
    >
      <h2 style={{ color: "white" }}>
        Zero Trust Security Controls
      </h2>

      <ul
        style={{
          color: "#cbd5e1",
          marginTop: "15px",
          lineHeight: "2"
        }}
      >
        {controls.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
