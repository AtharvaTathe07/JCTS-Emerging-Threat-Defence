from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI(title="JCTS Emerging Threat Defence API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "project": "JCTS Emerging Threat Defence",
        "status": "running"
    }

@app.get("/api/threats")
def get_threats():
    try:
        response = requests.get(
            "https://services.nvd.nist.gov/rest/json/cves/2.0?resultsPerPage=20",
            timeout=20
        )

        if response.status_code != 200:
            return {
                "feed_status": "error",
                "status_code": response.status_code,
                "response_preview": response.text[:500]
            }

        data = response.json()

        vulnerabilities = data.get("vulnerabilities", [])

        critical = 0
        high = 0
        recent_cves = []

        for item in vulnerabilities:
            cve = item.get("cve", {})

            if cve.get("id"):
                recent_cves.append(cve["id"])

            metrics = cve.get("metrics", {})
            score = None

            if metrics.get("cvssMetricV31"):
                score = metrics["cvssMetricV31"][0]["cvssData"]["baseScore"]
            elif metrics.get("cvssMetricV30"):
                score = metrics["cvssMetricV30"][0]["cvssData"]["baseScore"]

            if score is not None:
                if score >= 9:
                    critical += 1
                elif score >= 7:
                    high += 1

        return {
            "feed_status": "online",
            "latest_cves": len(vulnerabilities),
            "critical_cves": critical,
            "high_severity_cves": high,
            "recent_cves": recent_cves[:5]
        }

    except Exception as e:
        return {
            "feed_status": "error",
            "message": str(e)
        }
