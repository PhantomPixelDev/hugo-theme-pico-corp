---
title: "A manufacturer's site that finally generated enquiries"
date: 2024-10-15
client: "Halden Manufacturing"
industry: "Industrial manufacturing"
category: "Web Development"
year: 2024
duration: "3 months"
featured: false
weight: 60
description: "A rebuilt website and product catalogue for Halden Manufacturing, tripling qualified enquiries and cutting hosting costs from €1,400 to €19 a month."
summary: "Rebuilding a 400-page industrial catalogue as a static site, with specifications engineers can actually search."
headline: "Qualified enquiries up 3.1x year on year"
image: images/work-halden.jpg
imageAlt: "Machined metal components on a workshop bench"
challenge: |
  Halden's site held 400 product pages on a WordPress installation with 38 plugins.
  It took 6.4 seconds to load a product page, the specification tables were images,
  and the search returned results ordered by nothing in particular.

  Their customers are engineers who arrive knowing a part number or a tolerance.
  The site could not answer either question, so they phoned instead, or bought from
  a competitor whose PDF was easier to find.
solution: |
  The catalogue moved to structured data: one record per product, with
  specifications as real fields rather than images. That made filtering by
  tolerance, material and dimension possible, and made the pages readable by
  search engines and screen readers alike.

  The site is generated statically at build time and served from a CDN. Editors
  work in a headless CMS; a product update rebuilds and deploys in under two
  minutes.

  We also made the data downloadable as CSV and PDF per product family, because
  procurement departments ask for both and someone had been assembling them by
  hand.
results:
  - "Qualified enquiries up 3.1x year on year"
  - "Product page load time down from 6.4s to 0.7s"
  - "Organic search traffic up 84% in nine months"
  - "Hosting cost down from €1,400 to €19 a month"
  - "Specification sheets generated automatically rather than by hand"
stats:
  - value: "3.1x"
    label: "Qualified enquiries"
  - value: "0.7s"
    label: "Product page load"
  - value: "€19"
    label: "Monthly hosting, from €1,400"
technologies:
  - Hugo
  - TypeScript
  - Storyblok
  - Cloudflare
  - Pagefind
services:
  - /services/web-development
  - /services/branding
testimonial:
  quote: "There was a working staging environment in week three, and every decision after that was argued with data instead of slides."
  name: "Tobias Lehmann"
  role: "Managing Director, Halden Manufacturing"
gallery:
  - image: images/gallery-b.jpg
    alt: "Product specification table with filters"
    caption: "Specifications as data, filterable by tolerance and material"
  - image: images/gallery-a.jpg
    alt: "Product family overview page"
    caption: "Product families, with downloadable sheets per family"
related:
  - /work/northwind-customer-portal
  - /work/lumen-design-system
---

The specifications being images was the whole problem in miniature. It made the
site slow, unsearchable, inaccessible, and impossible to reuse, all at once. Once
they became structured fields, four separate complaints resolved themselves.

Hosting is the detail clients repeat back to us. Going from €1,400 a month to €19
is not the point of the project, but it pays for a good portion of the next one.
