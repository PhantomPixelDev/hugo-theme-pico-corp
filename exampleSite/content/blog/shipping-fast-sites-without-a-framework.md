---
title: "Shipping fast sites without a framework"
date: 2026-06-24
author: "Daniel Okonjo"
description: "Most corporate sites do not need a client-side framework. Here is what we ship instead, and the three cases where we still reach for one."
summary: "Most corporate sites do not need a client-side framework. Here is what we ship instead, and when we still reach for one."
image: images/blog-performance.jpg
imageAlt: "Performance trace showing render timings"
categories: ["Engineering"]
tags: ["performance", "css", "hugo"]
toc: true
---

A marketing site with twelve templates and a contact form does not need a
component framework on the client. It needs good HTML, about 8 KB of CSS, and
whatever small amount of JavaScript genuinely cannot be done another way.

## What we ship by default

Static output from a generator, one stylesheet, and a single script file that
usually handles two or three interactions: a navigation panel, a colour scheme
toggle, maybe a filter. On a recent 400-page catalogue the entire JavaScript
payload was 2.1 KB uncompressed.

The boring parts matter more than the framework choice. Images resized at build
time and served as WebP with a `srcset`. Fonts either self-hosted with
`font-display: swap` or, better, not loaded at all in favour of the system stack.
No third-party script that has not been argued for by name.

## Where the weight actually goes

When we audit a slow corporate site, the ranking is remarkably consistent:

1. Unoptimised images, usually 60 to 80% of transferred bytes.
2. Third-party tags: analytics, chat, consent, tag manager, in that order.
3. Webfonts, often four weights where two would do.
4. The framework, which is frequently the smallest of the four.

Removing a framework from a site whose hero image is a 3 MB JPEG is not a
performance project. It is a distraction from one.

## Three cases where we still use one

A genuinely stateful interface, such as the dispatch board we built for a
logistics client, where a hundred cells update against shared state. An
application that must work offline. And a product where the client's team already
maintains a component library in that framework, because consistency with the
people who inherit the code beats our preference.

Outside those, the default is HTML that the browser can render immediately, and
the discipline to keep it that way.
