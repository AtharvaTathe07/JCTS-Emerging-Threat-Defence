export default function IncidentQueue({ incidents = [] }) {
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
        Incident Response Queue
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
            <th align="left">ID</th>
            <th align="left">Severity</th>
            <th align="left">Status</th>
          </tr>
        </thead>

        <tbody>
          {incidents.map((incident) => (
            <tr key={incident.id}>
              <td>{incident.id}</td>
              <td>{incident.severity}</td>
              <td>{incident.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
