---
title: "Dispatch software that replaced eleven spreadsheets"
date: 2025-11-04
client: "Atlas Logistics"
industry: "Freight and logistics"
category: "Software Development"
year: 2025
duration: "7 months"
featured: true
weight: 20
description: "A dispatch and planning platform for Atlas Logistics, replacing a spreadsheet-based process across four depots and cutting planning time per shift from 90 to 25 minutes."
summary: "A planning platform for four depots, replacing a spreadsheet process that only two people fully understood."
headline: "Shift planning down from 90 to 25 minutes"
image: images/work-atlas.jpg
imageAlt: "Logistics depot with trucks at loading bays"
challenge: |
  Atlas planned 340 daily deliveries across four depots in a set of linked
  spreadsheets. It worked, in the sense that goods arrived, but it depended on two
  dispatchers who held the exceptions in their heads. When either was on holiday,
  planning took twice as long and mistakes tripled.

  Two previous attempts to buy off-the-shelf transport management software had
  failed. Both assumed a depot model Atlas does not use, and neither could handle
  the shared-load arrangements that make their margins work.
solution: |
  We spent three weeks sitting with dispatchers, documenting the rules nobody had
  written down: which customers tolerate a two-hour window, which drivers can take
  which vehicle classes, and how shared loads are split for invoicing.

  The platform is deliberately unambitious technically: a Go service, PostgreSQL,
  and a dense React interface built for keyboard use. No route optimisation
  algorithm, because the dispatchers' judgement beat every optimiser we tested on
  their real constraints. Instead the software removes clerical work and makes
  conflicts visible.

  We shipped a thin slice to one depot in week nine and let it run alongside the
  spreadsheets for a month before extending it.
results:
  - "Planning time per shift reduced from 90 minutes to 25"
  - "Mis-assigned loads down 61% year on year"
  - "Two new dispatchers trained in a week rather than three months"
  - "Invoice disputes on shared loads down from 14 a month to 2"
  - "Eleven spreadsheets retired, including the one on a personal laptop"
stats:
  - value: "-72%"
    label: "Planning time per shift"
  - value: "-61%"
    label: "Mis-assigned loads"
  - value: "4"
    label: "Depots on one system"
technologies:
  - Go
  - PostgreSQL
  - React
  - TypeScript
  - Docker
  - Terraform
services:
  - /services/software-development
  - /services/consulting
testimonial:
  quote: "We asked for a website and were told we needed an operations tool. They were right, and they said so before the contract was signed."
  name: "Jonas Weber"
  role: "COO, Atlas Logistics"
gallery:
  - image: images/gallery-b.jpg
    alt: "Dispatch board showing daily assignments"
    caption: "The dispatch board, built for keyboard-first use"
  - image: images/gallery-c.jpg
    alt: "Conflict detection panel"
    caption: "Conflicts surfaced rather than silently resolved"
related:
  - /work/northwind-customer-portal
  - /work/vero-onboarding-flow
---

The temptation in logistics software is to automate the decision. We tested that
and lost: on Atlas's real constraints, the optimiser produced plans the
dispatchers rejected, usually for reasons involving a specific customer or a
specific driver that no model captured.

So the software does the clerical half. It knows the rules, shows conflicts
immediately, and handles the arithmetic of shared-load invoicing. The judgement
stays with the person who has spent nine years learning which customer really
means it when they say the window is fixed.
