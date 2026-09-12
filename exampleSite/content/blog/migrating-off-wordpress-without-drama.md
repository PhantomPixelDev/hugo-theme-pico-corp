---
title: "Migrating off WordPress without drama"
date: 2026-02-26
author: "Ruben Dias"
description: "A migration plan that keeps search rankings, keeps editors working, and does not require a content freeze."
summary: "A migration plan that keeps rankings and editors working, with no content freeze."
image: images/blog-signals.jpg
imageAlt: "Server rack with network cabling"
categories: ["Engineering"]
tags: ["migration", "hugo", "performance"]
toc: true
---

Most WordPress migrations fail in one of two ways: organic traffic drops because
redirects were an afterthought, or the editorial team loses three weeks to a
content freeze that was never in the plan.

## Start with the URL inventory

Export every URL that has received an organic visit or an external link in the last
twelve months. That list, not the sitemap, is the thing you must preserve. Map each
entry to its destination before writing a single template, and treat any URL you
cannot map as a decision requiring a person, not a wildcard rule.

We keep the mapping in a CSV in the repository. It becomes the redirect
configuration, and it is reviewable by people who do not read code.

{{< figure src="images/blog-performance.jpg" alt="A redirect map open in a spreadsheet next to a terminal" caption="The redirect map is the deliverable people forget to ask for." >}}

## Migrate content mechanically, then review

Write a script that converts posts to Markdown or pushes them into the new CMS.
Run it repeatedly. Manual cleanup during migration is how you end up unable to
re-run it, which is how you end up with a content freeze.

Expect three things to need hand work: inline shortcodes, tables that were pasted
from Word, and images referenced by absolute URL to the old domain.

## Run both systems briefly

Point a subdomain at the new build and let editors work in both for a week. They
will find the field you forgot within a day. This is cheaper than discovering it
after cutover.

## Cut over quietly

DNS change, redirects live, and monitoring on 404s and Core Web Vitals for the
following month. On the last four migrations we ran, organic traffic was flat or up
within six weeks, and hosting cost fell by between 70 and 98%.

The unglamorous conclusion: a migration is a redirect project with a rebuild
attached, not the other way round.
