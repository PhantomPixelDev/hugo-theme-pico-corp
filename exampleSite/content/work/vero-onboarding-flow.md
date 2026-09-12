---
title: "Business account onboarding, from nine days to under an hour"
date: 2025-03-06
client: "Vero Bank"
industry: "Financial services"
category: "Software Development"
year: 2025
duration: "6 months"
featured: false
weight: 50
description: "Digitising business account onboarding for Vero Bank, reducing median time to account opening from nine days to 47 minutes while keeping full audit compliance."
summary: "Digitising business account onboarding under real regulatory constraints, without weakening the audit trail."
headline: "Median onboarding time: 47 minutes"
image: images/work-vero.jpg
imageAlt: "Bank advisor in conversation with a small business owner"
challenge: |
  Opening a business account at Vero took a median of nine days. Applicants filled
  in a PDF, emailed it, and waited while a compliance officer requested the three
  documents that were always missing. About a third of applications were abandoned
  before completion.

  The constraint was real: every step had to remain auditable, and the bank's
  compliance function had been burned before by a vendor tool that lost its audit
  trail during an upgrade.
solution: |
  We mapped the process with compliance in the room, and separated the checks a
  machine can perform from those that require judgement. Registry lookups,
  document classification and sanctions screening are automated. Beneficial
  ownership above a threshold still goes to a human, as it must.

  Every state transition writes an append-only event with the actor, the input and
  the rule version applied. Compliance can reconstruct any decision, which is what
  made the automation acceptable to them in the first place.

  Applicants get a status page that names exactly what is outstanding, which
  removed most of the email exchange.
results:
  - "Median time to account opening down from 9 days to 47 minutes"
  - "Application abandonment down from 34% to 11%"
  - "Compliance review time per application down 78%"
  - "Full append-only audit trail, accepted by internal audit without exception"
  - "No increase in post-opening compliance findings after twelve months"
stats:
  - value: "47 min"
    label: "Median onboarding"
  - value: "-78%"
    label: "Compliance review time"
  - value: "11%"
    label: "Abandonment, from 34%"
technologies:
  - TypeScript
  - Go
  - PostgreSQL
  - Event sourcing
  - Kubernetes
  - OpenTelemetry
services:
  - /services/software-development
  - /services/consulting
gallery:
  - image: images/gallery-c.jpg
    alt: "Application status page listing outstanding items"
    caption: "The status page that removed most of the email traffic"
related:
  - /work/atlas-dispatch-platform
  - /work/northwind-customer-portal
---

Regulated onboarding is usually slow for organisational reasons rather than
technical ones. Nobody had ever written down which checks actually required human
judgement, so all of them were treated as though they did.

Separating those two categories was the whole project. The event log made it
safe: because every decision can be replayed with the rule version that produced
it, compliance was willing to let the machine handle the parts that are genuinely
mechanical.
