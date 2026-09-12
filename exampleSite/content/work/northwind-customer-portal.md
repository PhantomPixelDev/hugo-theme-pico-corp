---
title: "A self-service portal that cut call volume by a third"
date: 2026-02-18
client: "Northwind Energy"
industry: "Energy and utilities"
category: "Web Development"
year: 2026
duration: "5 months"
featured: true
weight: 10
description: "Northstar Digital rebuilt Northwind Energy's customer portal, moving meter readings, invoices and tariff changes to self-service and reducing inbound calls by 34%."
summary: "Replacing a decade-old customer area with a self-service portal for 240,000 household accounts."
headline: "34% fewer inbound calls in the first quarter"
image: images/work-northwind.jpg
imageAlt: "Control room screens showing energy consumption dashboards"
challenge: |
  Northwind's customer area dated from 2013 and did three things badly: meter
  readings, invoice history and tariff changes. Everything else was a phone
  call. The support team handled 18,000 calls a month, and roughly half were
  requests customers could in principle have completed themselves.

  The portal could not be extended. It ran on an unsupported framework, had no
  test coverage, and the two developers who understood it had left. Any change
  took six weeks and broke something else.
solution: |
  We ran a two-week discovery on the call logs, tagging six months of support
  tickets by intent. Four journeys accounted for 71% of avoidable calls, so those
  four became the scope and everything else was deferred.

  The new portal is a TypeScript application against the existing billing system,
  with a small integration layer that normalises the two meter-reading formats
  the business had accumulated. We kept the billing system untouched: replacing
  it was a three-year programme nobody had budget for.

  Accessibility was a hard requirement. Roughly 9% of the customer base is over
  75, and the old interface failed keyboard navigation entirely.
results:
  - "Inbound calls down 34% in the first quarter after launch"
  - "Self-service meter submissions rose from 41% to 78% of readings"
  - "Median page load 0.8s on a mid-range Android phone, down from 4.2s"
  - "WCAG 2.2 AA verified by an external audit with no critical findings"
  - "Support team redeployed two full-time roles to complaint resolution"
stats:
  - value: "-34%"
    label: "Inbound support calls"
  - value: "78%"
    label: "Readings self-submitted"
  - value: "0.8s"
    label: "Median load time"
technologies:
  - TypeScript
  - Astro
  - Go
  - PostgreSQL
  - Azure
  - Playwright
services:
  - /services/web-development
  - /services/digital-strategy
testimonial:
  quote: "They rebuilt the portal in four months and it has not needed a rescue since. The handover documentation was better than our internal standard."
  name: "Annika Roth"
  role: "Head of Digital, Northwind Energy"
gallery:
  - image: images/gallery-a.jpg
    alt: "Meter reading submission screen on a phone"
    caption: "Meter submission, the single most used journey"
  - image: images/gallery-b.jpg
    alt: "Invoice history table with filters"
    caption: "Invoice history, designed for density over decoration"
  - image: images/gallery-c.jpg
    alt: "Tariff comparison interface"
    caption: "Tariff comparison with plain-language explanations"
related:
  - /work/vero-onboarding-flow
  - /work/halden-industrial-website
---

The most useful decision was made in week two, and it was a subtraction. The
original brief listed 31 features. Tagging the support tickets showed that four
journeys carried nearly three quarters of the avoidable call volume, so we built
those four properly instead of thirty-one adequately.

The second decision was to leave the billing system alone. It is old and nobody
enjoys working with it, but it is correct, and correctness in billing is worth
more than elegance. The integration layer in front of it is the only new thing
that touches money, and it is the most heavily tested code in the project.
