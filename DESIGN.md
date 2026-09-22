---
tokens:
  color:
    atomic:
      "--poca-color-atomic-neutral-100": "#ffffff"
      "--poca-color-atomic-neutral-300": "#e8e8eb"
      "--poca-color-atomic-neutral-900": "#171719"
      "--poca-color-atomic-brand-500": "#ff5b61"
    semantic:
      "--poca-color-surface-brand-primary": "var(--poca-color-atomic-brand-500)"
      "--poca-color-surface-neutral-primary": "var(--poca-color-atomic-neutral-100)"
      "--poca-color-surface-neutral-inverse": "var(--poca-color-atomic-neutral-900)"
      "--poca-color-foreground-neutral-primary": "var(--poca-color-atomic-neutral-900)"
      "--poca-color-foreground-neutral-inverse": "var(--poca-color-atomic-neutral-100)"
      "--poca-color-icon-neutral-primary": "var(--poca-color-atomic-neutral-900)"
      "--poca-color-icon-neutral-inverse": "var(--poca-color-atomic-neutral-100)"
      "--poca-color-border-neutral-primary": "var(--poca-color-atomic-neutral-300)"
  spacing:
    "--poca-spacing-8": "8px"
    "--poca-spacing-16": "16px"
    "--poca-spacing-24": "24px"
  dimension:
    "--poca-dimension-24": "24px"
    "--poca-dimension-44": "44px"
    "--poca-dimension-48": "48px"
    "--poca-dimension-56": "56px"
  shape:
    "--poca-radius-12": "12px"
    "--poca-border-width-default": "1px"
  typography:
    "--poca-typography-button-font-family": "Pretendard, sans-serif"
    "--poca-typography-button-font-size": "16px"
    "--poca-typography-button-font-weight": 600
    "--poca-typography-button-line-height": "24px"
    "--poca-typography-button-letter-spacing": "0%"
---

# PocaMarket Design System

## Overview

This document defines the currently approved design-system rules for PocaMarket UI work.

- Use only Tokens, Components, and design rules currently defined in the project. Do not add undefined Tokens, Components, values, Variants, or States.
- Reference captures can inform visual observation, but they do not establish new system rules, Tokens, or Component APIs.
- The current implementation and contract coverage is listed in [index.md](index.md). Read it before UI work.

## Colors

Use Semantic Color Tokens when styling approved Components. Atomic Color Tokens remain the source values behind those aliases and should not be referenced directly in Button styles.

The approved semantic roles distinguish brand-primary surfaces, neutral primary or inverse surfaces, foreground, icon, and border usage. Apply them according to the component contract rather than assigning raw color values.

Reference captures repeatedly show a coral primary action role alongside light surfaces, dark foreground or icon content, and subtle borders. This is observation only; it does not define additional color roles.

## Typography

The only currently defined typography rule is the Button label typography. Use it through the approved Button Component rather than recreating its text styling locally.

Typography for headings, body text, product metadata, prices, tags, and chat content is not yet defined as an approved Token set. Do not introduce those typography rules in this document or in implementation without first defining them in the system.

## Layout & Spacing

Use the currently defined spacing and dimension Tokens where the approved Button Component requires them. Button sizing, padding, icon spacing, and parent-controlled width behavior are specified by the [Button Contract](docs/Button.contract.md).

For Components without a contract, do not infer spacing, dimensions, or fixed-layout rules from reference captures.

## Elevation & Depth

No elevation or depth Token is currently defined. Do not introduce shadow or elevation values as system rules.

## Shapes

Use the approved shape Token where the Button Contract specifies it. No broader shape rules for other Components are currently defined.

## Components

Use only Components already present in the project system.

- **Button** is the only Component with a GitHub implementation and approved contract. Its exact Type·Size combinations, icon behavior, states, accessibility requirements, and usage constraints are defined in the [Button Contract](docs/Button.contract.md).
- Text Button, Icon Button, Floating Icon Button, Toggle Icon Button, Inputs, Navigation, Content, Feedback, Trade/Chat, and Marketing/Auth Components exist in the current Figma system. Their detailed Props, Token bindings, and implementation rules are not yet documented in GitHub and must not be inferred.
- Do not create undefined Component variants or use general Button variants to replace a separately defined Component such as Toggle Icon Button.

## Do's and Don'ts

### Do

- Read [index.md](index.md) before starting UI work and read only the Component Contract required for the task.
- Use defined Tokens and Component rules.
- Use the approved Button Component and its Semantic Token mapping for Button UI.
- Let the parent layout control Button fill behavior where needed, as defined by the Button Contract.

### Don't

- Do not add undefined Tokens, Components, rules, values, Variants, or States.
- Do not reference Atomic Tokens directly in Button styles.
- Do not override Button-controlled size, padding, gap, radius, foreground, background, or border with local styling.
- Do not add Pressed, Disabled, or Selected variants to the Button Component.
- Do not treat reference-capture observations as confirmed system rules.
