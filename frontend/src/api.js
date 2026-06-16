export const getThreatData = async () => ({
  latest_cves: 128,
  critical_cves: 19,
  high_severity_cves: 43,
  feed_status: "ONLINE",

  recent_cves: [
    {
      id:"CVE-2026-10001",
      severity:"Critical",
      score:9.8,
      description:"Remote Code Execution vulnerability"
    },
    {
      id:"CVE-2026-10002",
      severity:"High",
      score:8.4,
      description:"Privilege Escalation vulnerability"
    },
    {
      id:"CVE-2026-10003",
      severity:"Medium",
      score:6.5,
      description:"Information Disclosure vulnerability"
    }
  ]
});

export const getIncidents = async () => ([
  {
    id:"INC-1001",
    severity:"Critical",
    status:"Investigating"
  },
  {
    id:"INC-1002",
    severity:"High",
    status:"Containment"
  },
  {
    id:"INC-1003",
    severity:"Medium",
    status:"Monitoring"
  }
]);
