---
title: "Measuring what clients actually care about"
date: 2025-07-09
author: "Daniel Okonjo"
description: "Lighthouse scores do not appear in board reports. Mapping technical metrics to commercial ones is part of the job."
summary: "Lighthouse scores do not appear in board reports. Mapping technical metrics to commercial ones is part of the work."
image: images/blog-performance.jpg
imageAlt: "Dashboard showing conversion and performance metrics side by side"
categories: ["Strategy"]
tags: ["performance", "analytics"]
---

A perfect Lighthouse score has never once persuaded a finance director of anything.
"Checkout completion rose four points after the largest contentful paint dropped
below one second" has, repeatedly.

## Pair every technical metric with a commercial one

Before a performance project starts, we agree which business number is expected to
move and how it will be measured. Page load pairs with conversion or bounce.
Accessibility conformance pairs with tender eligibility. Build time pairs with
release frequency, which pairs with time to ship a fix.

If no commercial number can plausibly be attached, that is worth knowing early. Some
technical work is maintenance and should be argued for as maintenance rather than
dressed up as growth.

## Measure before, honestly

Take the baseline before touching anything, from field data rather than a lab run,
segmented by device class. Desktop-on-fibre numbers hide the problem: on a recent
project the median mobile load time was 4.2 seconds while the lab score was a
comfortable 94.

## Report the ones that did not move

On the Halden project, organic traffic rose 84% and enquiries tripled. Time on page
fell, and we reported that too, because a catalogue where engineers find the
tolerance faster should show exactly that.

{{< stats "3.1s → 0.7s|Product page load" "+84%|Organic sessions" "3.1x|Qualified enquiries" >}}

{{< callout title="Report the ones that did not move" >}}
Time on page fell by a fifth on that project. We put it in the same summary as
the favourable numbers, because a catalogue where engineers find the tolerance
faster *should* show exactly that.
{{< /callout >}}

Reporting only the favourable metrics trains clients to distrust the favourable
metrics.
