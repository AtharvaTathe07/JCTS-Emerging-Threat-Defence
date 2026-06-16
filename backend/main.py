from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests
import random
from datetime import datetime

app = FastAPI(title="JCTS Enterprise SOC API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"status":"online","service":"JCTS SOC"}

@app.get("/api/health")
def health():
    return {
        "status":"online",
        "timestamp":datetime.utcnow().isoformat()
    }

@app.get("/api/threats")
def threats():
    try:
        r=requests.get(
            "https://services.nvd.nist.gov/rest/json/cves/2.0?resultsPerPage=20",
            timeout=20
        )

        data=r.json()
        vulns=data.get("vulnerabilities",[])

        critical=0
        high=0
        recent=[]

        for v in vulns:

            cve=v.get("cve",{})
            score=0

            metrics=cve.get("metrics",{})

            if metrics.get("cvssMetricV31"):
                score=metrics["cvssMetricV31"][0]["cvssData"]["baseScore"]

            sev="Low"

            if score>=9:
                sev="Critical"
                critical+=1
            elif score>=7:
                sev="High"
                high+=1
            elif score>=4:
                sev="Medium"

            recent.append({
                "id":cve.get("id","N/A"),
                "score":score,
                "severity":sev,
                "description":
                cve.get("descriptions",[{"value":"N/A"}])[0]["value"][:250]
            })

        return {
            "feed_status":"online",
            "latest_cves":len(vulns),
            "critical_cves":critical,
            "high_severity_cves":high,
            "recent_cves":recent[:15]
        }

    except Exception as e:
        return {
            "feed_status":"offline",
            "message":str(e)
        }

@app.get("/api/incidents")
def incidents():
    return [
        {
            "id":"INC-1001",
            "severity":"Critical",
            "status":"Investigating"
        },
        {
            "id":"INC-1002",
            "severity":"High",
            "status":"Containment"
        },
        {
            "id":"INC-1003",
            "severity":"Medium",
            "status":"Monitoring"
        }
    ]

@app.get("/api/soc-feed")
def socfeed():

    events=[
        "Malware IOC Detected",
        "Suspicious PowerShell Execution",
        "Credential Stuffing Activity",
        "DNS Tunneling Attempt",
        "Ransomware Indicator",
        "Lateral Movement Alert",
        "Privilege Escalation Attempt",
        "Exploit Activity Observed"
    ]

    return {
        "events":[
            {
                "time":datetime.utcnow().strftime("%H:%M:%S"),
                "event":random.choice(events)
            }
            for _ in range(10)
        ]
    }
