export default function PostQuantumPanel() {
  const algorithms = [
    {
      name: "CRYSTALS-Kyber",
      purpose: "Key Encapsulation"
    },
    {
      name: "CRYSTALS-Dilithium",
      purpose: "Digital Signatures"
    },
    {
      name: "Falcon",
      purpose: "Compact Signatures"
    },
    {
      name: "SPHINCS+",
      purpose: "Hash-Based Signatures"
    }
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
        Post-Quantum Cryptography
      </h2>

      <table
        width="100%"
        style={{
          color: "white",
          marginTop: "15px"
        }}
      >
        <thead>
          <tr>
            <th align="left">Algorithm</th>
            <th align="left">Purpose</th>
          </tr>
        </thead>

        <tbody>
          {algorithms.map((algo) => (
            <tr key={algo.name}>
              <td>{algo.name}</td>
              <td>{algo.purpose}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
