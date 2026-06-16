export default function SOCFeed(){
const logs=[
"[SOC] Malware IOC detected",
"[SOC] Failed login spike",
"[SOC] Suspicious PowerShell execution",
"[SOC] DNS tunneling attempt",
"[SOC] Threat actor infrastructure detected",
"[SOC] Lateral movement observed",
"[SOC] Credential dumping alert",
"[SOC] Endpoint anomaly detected"
];

return(
<div style={{
background:"rgba(15,23,42,.75)",
borderRadius:"16px",
padding:"20px",
marginTop:"20px",
maxHeight:"300px",
overflowY:"auto"
}}>
<h2 style={{color:"#67e8f9"}}>
Live SOC Activity
</h2>

{logs.map((l,i)=>(
<div key={i}
style={{
padding:"10px 0",
borderBottom:"1px solid #1e293b",
color:"#cbd5e1"
}}>
{l}
</div>
))}
</div>
);
}
