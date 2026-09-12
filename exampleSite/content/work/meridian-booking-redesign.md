---
title: "A booking flow that clinics could finally recommend"
date: 2025-08-12
client: "Meridian Health"
industry: "Healthcare"
category: "UI/UX Design"
year: 2025
duration: "3 months"
featured: false
weight: 30
description: "Redesign of Meridian Health's appointment booking flow, raising completion from 52% to 84% and passing an external WCAG 2.2 AA audit."
summary: "Rebuilding an appointment booking flow used by 90 clinics, with accessibility as a procurement requirement."
headline: "Booking completion up from 52% to 84%"
image: images/work-meridian.jpg
imageAlt: "Clinic reception area with a patient checking in"
challenge: |
  Meridian's booking flow completed 52% of started bookings. The rest were
  abandoned, and the clinics absorbed the difference as phone calls. Worse, the
  flow failed accessibility review, which had begun to cost Meridian public
  tenders where WCAG conformance was a stated requirement.

  The flow had eleven steps, asked for insurance details before showing any
  availability, and used a calendar widget that was unusable with a keyboard.
solution: |
  We watched 22 recorded sessions and ran eight moderated tests, four of them
  with people using assistive technology. The pattern was consistent: people
  abandoned when asked for information before seeing whether an appointment they
  wanted even existed.

  The redesign inverts that order. Availability first, identity second, insurance
  last, with the whole flow reduced to four steps and a native date input rather
  than a custom widget. Error messages name the field and the fix.

  We delivered the flow as a documented component set so Meridian's in-house team
  could apply the same patterns to the rest of the product.
results:
  - "Booking completion up from 52% to 84%"
  - "Abandonment at the insurance step down 68%"
  - "External WCAG 2.2 AA audit passed with no critical or serious findings"
  - "Average completion time down from 4m 10s to 1m 50s"
  - "Two public tenders won where accessibility conformance was mandatory"
stats:
  - value: "84%"
    label: "Booking completion"
  - value: "-56%"
    label: "Time to complete"
  - value: "AA"
    label: "WCAG 2.2 verified"
technologies:
  - Figma
  - Design tokens
  - Storybook
  - Axe
  - NVDA
services:
  - /services/ui-ux-design
testimonial:
  quote: "Our booking flow went from a liability to the thing sales demos first. Accessibility was treated as a requirement rather than an add-on."
  name: "Sofia Marques"
  role: "Product Lead, Meridian Health"
gallery:
  - image: images/gallery-c.jpg
    alt: "Availability-first booking step"
    caption: "Availability comes first, before any personal detail is requested"
  - image: images/gallery-a.jpg
    alt: "Confirmation screen with appointment summary"
    caption: "Confirmation states exactly what happens next"
related:
  - /work/lumen-design-system
  - /work/vero-onboarding-flow
---

The fix was ordering, not aesthetics. People will tolerate a plain interface that
answers their question first. They will not fill in insurance details to discover
that no appointment exists this week.

The accessibility work turned out to be commercially the most valuable part.
Meridian sells to public health providers, and a conformance statement backed by
an external audit removed an objection that had been quietly losing them tenders.
