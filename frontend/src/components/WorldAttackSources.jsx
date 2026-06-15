export default function WorldAttackSources() {
  const sources = [
    ["Russia",120],
    ["China",95],
    ["North Korea",72],
    ["Iran",55],
    ["Brazil",30]
  ];

  return (
    <div
      style={{
        background:"#0f172a",
        borderRadius:"16px",
        padding:"20px",
        marginTop:"20px"
      }}
    >
      <h2 style={{color:"white"}}>
        World Attack Sources
      </h2>

      {sources.map(([country,count])=>(
        <div
          key={country}
          style={{
            display:"flex",
            justifyContent:"space-between",
            color:"#cbd5e1",
            marginTop:"10px"
          }}
        >
          <span>{country}</span>
          <span>{count}</span>
        </div>
      ))}
    </div>
  );
}
