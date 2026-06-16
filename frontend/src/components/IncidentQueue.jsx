export default function IncidentQueue() {
  const incidents = [
    {id:"INC-1001",severity:"Critical",status:"Investigating"},
    {id:"INC-1002",severity:"High",status:"Containment"},
    {id:"INC-1003",severity:"Medium",status:"Monitoring"}
  ];

  return (
    <div style={{
      background:"rgba(15,23,42,.85)",
      borderRadius:"16px",
      padding:"20px",
      marginTop:"20px"
    }}>
      <h2 style={{color:"white"}}>Incident Response Queue</h2>

      <table width="100%" style={{color:"white"}}>
        <thead>
          <tr>
            <th align="left">ID</th>
            <th align="left">Severity</th>
            <th align="left">Status</th>
          </tr>
        </thead>

        <tbody>
          {incidents.map(i=>(
            <tr key={i.id}>
              <td>{i.id}</td>
              <td>{i.severity}</td>
              <td>{i.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
