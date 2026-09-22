---
variables:
  "Color-Atomic":
    "Neutral100": "#FFFFFF"
    "Neutral200": "#F6F6F8"
    "Neutral300": "#E8E8EB"
    "Neutral400": "#C8C8CC"
    "Neutral500": "#8E8E93"
    "Neutral600": "#707075"
    "Neutral700": "#55555A"
    "Neutral800": "#303033"
    "Neutral900": "#171719"
    "Brand100": "#FFF1F2"
    "Brand200": "#FFDADD"
    "Brand300": "#FFB8BC"
    "Brand400": "#FF858B"
    "Brand500": "#FF5B61"
    "Brand600": "#E94B52"
    "Brand700": "#C9363D"
    "Brand800": "#A6282E"
    "Brand900": "#7D1C22"
    "Feature500": "#6C55FF"
  "Color-Semantic":
    "Foreground/Neutral/Primary":
      alias: "Color-Atomic/Neutral900"
    "Foreground/Neutral/Secondary":
      alias: "Color-Atomic/Neutral700"
    "Foreground/Neutral/Tertiary":
      alias: "Color-Atomic/Neutral500"
    "Foreground/Neutral/Inverse":
      alias: "Color-Atomic/Neutral100"
    "Foreground/Brand/Primary":
      alias: "Color-Atomic/Brand500"
    "Foreground/Feature/Primary":
      alias: "Color-Atomic/Feature500"
    "Surface/Neutral/Primary":
      alias: "Color-Atomic/Neutral100"
    "Surface/Neutral/Secondary":
      alias: "Color-Atomic/Neutral200"
    "Surface/Neutral/Inverse":
      alias: "Color-Atomic/Neutral900"
    "Surface/Brand/Primary":
      alias: "Color-Atomic/Brand500"
    "Surface/Brand/Secondary":
      alias: "Color-Atomic/Brand100"
    "Surface/Feature/Primary":
      alias: "Color-Atomic/Feature500"
    "Icon/Neutral/Primary":
      alias: "Color-Atomic/Neutral900"
    "Icon/Neutral/Secondary":
      alias: "Color-Atomic/Neutral500"
    "Icon/Neutral/Inverse":
      alias: "Color-Atomic/Neutral100"
    "Icon/Brand/Selected":
      alias: "Color-Atomic/Brand500"
    "Icon/Feature/Primary":
      alias: "Color-Atomic/Feature500"
    "Border/Neutral/Primary":
      alias: "Color-Atomic/Neutral300"
    "Border/Brand/Selected":
      alias: "Color-Atomic/Brand500"
  "Typography":
    "FontFamily/Base": "Pretendard"
    "FontSize/28": 28
    "FontSize/24": 24
    "FontSize/20": 20
    "FontSize/16": 16
    "FontSize/14": 14
    "FontSize/12": 12
    "FontWeight/Bold": 700
    "FontWeight/SemiBold": 600
    "FontWeight/Regular": 400
    "FontWeight/Medium": 500
    "LineHeight/36": 36
    "LineHeight/32": 32
    "LineHeight/28": 28
    "LineHeight/24": 24
    "LineHeight/20": 20
    "LineHeight/16": 16
    "LetterSpacing/0": 0
  "Spacing":
    "4": 4
    "8": 8
    "12": 12
    "16": 16
    "24": 24
    "32": 32
  "Dimension":
    "4": 4
    "16": 16
    "24": 24
    "44": 44
    "48": 48
    "52": 52
    "56": 56
    "72": 72
    "80": 80
    "104": 104
  "Radius":
    "12": 12
    "16": 16
    "999": 999
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
