export default function ThreatHeatmap(){
const matrix=[
[9,8,7,4,2],
[8,9,8,5,3],
[6,8,9,7,4],
[4,5,7,8,9],
[2,3,4,6,8]
];

const labels=[
"Initial Access",
"Execution",
"Persistence",
"Privilege Esc",
"Impact"
];

return(
<div style={{
background:"rgba(15,23,42,.75)",
padding:"20px",
borderRadius:"16px",
marginTop:"20px"
}}>
<h2 style={{color:"#67e8f9"}}>
MITRE Threat Heatmap
</h2>

<div style={{
display:"grid",
gridTemplateColumns:"120px repeat(5,1fr)",
gap:"6px",
marginTop:"15px"
}}>
<div></div>

{labels.map(l=>
<div key={l} style={{color:"white",fontSize:"12px"}}>
{l}
</div>
)}

{matrix.map((row,r)=>(
<>
<div key={"r"+r} style={{color:"#94a3b8"}}>
Tactic {r+1}
</div>

{row.map((v,c)=>(
<div
key={r+"-"+c}
style={{
height:"45px",
borderRadius:"6px",
background:`rgba(239,68,68,${v/10})`
}}
/>
))}
</>
))}
</div>
</div>
);
}
