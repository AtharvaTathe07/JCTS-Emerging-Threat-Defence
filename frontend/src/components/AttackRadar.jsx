export default function AttackRadar(){

  return(
    <div
      style={{
        marginTop:"20px",
        height:"350px",
        background:"#020617",
        border:"1px solid #0ea5e9",
        borderRadius:"16px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        overflow:"hidden",
        position:"relative"
      }}
    >
      <div
        style={{
          width:"320px",
          height:"320px",
          borderRadius:"50%",
          border:"2px solid #06b6d4",
          position:"absolute",
          animation:"spin 6s linear infinite"
        }}
      />

      <div
        style={{
          width:"220px",
          height:"220px",
          borderRadius:"50%",
          border:"2px solid #06b6d4"
        }}
      />

      <h2
        style={{
          position:"absolute",
          color:"#67e8f9"
        }}
      >
        Live Attack Radar
      </h2>

      <style>{`
        @keyframes spin{
          from{transform:rotate(0deg)}
          to{transform:rotate(360deg)}
        }
      `}</style>
    </div>
  );
}
