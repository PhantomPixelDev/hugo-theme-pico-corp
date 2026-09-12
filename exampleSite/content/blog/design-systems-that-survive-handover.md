---
title: "Design systems that survive handover"
date: 2026-05-13
author: "Ines Kruger"
description: "A design system is only finished when someone who was not in the room can extend it. Four practices that decide whether that happens."
summary: "A design system is only finished when someone who was not in the room can extend it correctly."
image: images/blog-design-systems.jpg
imageAlt: "Component documentation on a large display"
categories: ["Design"]
tags: ["design systems", "accessibility", "handover"]
toc: true
---

We have inherited enough abandoned design systems to recognise the pattern. The
library exists, it is beautiful, and every new screen in the product ignores it.

## Name things after what they do

A token called `blue-600` tells you nothing about whether you may use it for a
destructive action. `--color-danger` does. Semantic naming is the difference
between a system somebody can apply correctly without asking and one that requires
a conversation for every decision.

The same applies to components. `CardWithImageAndTwoButtons` describes a layout.
`ProjectCard` describes a job, and it survives the redesign.

## Document the states nobody enjoys

Every component needs loading, empty, error and disabled defined before it ships.
These are the states that get improvised under deadline, and improvised states are
where inconsistency enters a system. They are also where accessibility failures
concentrate: an error message that is announced to nobody, a loading state that
traps focus.

## Build accessibility into the component

If focus order, contrast and error announcement are decided inside the component,
every screen that uses it inherits correct behaviour. If they are left to the
screen, each new screen is a fresh chance to get it wrong. This single decision
does more for conformance than any audit at the end of a project.

## Adopt it incrementally

Tokens first. They are cheap to swap in, they produce visible consistency quickly,
and they do not require anyone to rewrite a component. Then replace components
where a rewrite was already scheduled. A big-bang migration competes with feature
work, and feature work wins.

The test is simple. Six months after handover, does a new screen built by someone
who was never in a workshop look like it belongs? If yes, the system works. If
not, it was a style guide with better typography.
