# Button Contract

## Source

Import the public component from the project entry point:

```tsx
import { Button } from "./src";
```

The implementation lives in:

- `src/components/Button/Button.tsx`
- `src/components/Button/Button.module.css`
- `src/styles/tokens.css`

This contract mirrors the current Figma **Button** Component Set. Figma is the source of truth.

## Figma Variant Matrix

| Figma Type | Figma Size | Supported |
| --- | --- | --- |
| Main | Large | Yes |
| Main | Medium | Yes |
| Alternative | Large | Yes |
| Alternative | Medium | Yes |
| Outlined | Large | Yes |
| Outlined | Medium | Yes |
| Outlined | Small | Yes |

There is no `State` Variant Property in the current Figma Button set. Do not add Pressed, Disabled, Selected, `Main / Small`, or `Alternative / Small` as component variants.

## Props

| Code prop | Type | Default | Figma relationship |
| --- | --- | --- | --- |
| `label` | `string` | `"버튼"` | Label Text Property |
| `type` | `"Main" \| "Alternative" \| "Outlined"` | `"Main"` | Type Variant Property |
| `size` | See allowed combinations below | `"Large"` | Size Variant Property |
| `showLeadingIcon` | `boolean` | `false` | Show Leading Icon Boolean Property |
| `leadingIcon` | `ReactNode` | — | Leading Icon Instance Swap Property |
| `showTrailingIcon` | `boolean` | `false` | Show Trailing Icon Boolean Property |
| `trailingIcon` | `ReactNode` | — | Trailing Icon Instance Swap Property |
| `htmlType` | `"button" \| "submit" \| "reset"` | `"button"` | Native HTML behavior; not a Figma property |

The component also accepts standard `ButtonHTMLAttributes<HTMLButtonElement>`, except `children` and native `type`.

### Allowed Type and Size combinations

``	s
type MainOrAlternative =
  | { type?: "Main" | "Alternative"; size?: "Large" | "Medium" };

type Outlined =
  | { type: "Outlined"; size?: "Large" | "Medium" | "Small" };
```

TypeScript rejects unsupported combinations such as `type="Main" size="Small"`.

## Design Token Contract

The component reads semantic CSS variables from `src/styles/tokens.css`.

| Figma token | CSS variable | Button usage |
| --- | --- | --- |
| Surface/Brand/Primary | `--poca-color-surface-brand-primary` | Main background |
| Surface/Neutral/Inverse | `--poca-color-surface-neutral-inverse` | Alternative background |
| Surface/Neutral/Primary | `--poca-color-surface-neutral-primary` | Outlined background |
| Foreground/Neutral/Inverse | `--poca-color-foreground-neutral-inverse` | Main and Alternative label |
| Foreground/Neutral/Primary | `--poca-color-foreground-neutral-primary` | Outlined label |
| Icon/Neutral/Inverse | `--poca-color-icon-neutral-inverse` | Main and Alternative icon semantics |
| Icon/Neutral/Primary | `--poca-color-icon-neutral-primary` | Outlined icon semantics |
| Border/Neutral/Primary | `--poca-color-border-neutral-primary` | Outlined border |
| Spacing/8 | `--poca-spacing-8` | Label and icon gap |
| Spacing/16 | `--poca-spacing-16` | Outlined Small horizontal padding |
| Spacing/24 | `--poca-spacing-24` | Large and Medium horizontal padding |
| Dimension/44 | `--poca-dimension-44` | Small height |
| Dimension/48 | `--poca-dimension-48` | Medium height |
| Dimension/56 | `--poca-dimension-56` | Large height |
| Dimension/24 | `--poca-dimension-24` | Icon slot |
| Radius/12 | `--poca-radius-12` | All Button corners |
| 16 / SemiBold / 24 / 0% | `--poca-typography-button-*` | Button label typography |

Semantic variables alias their exported Atomic variables. Do not reference Atomic variables directly in Button styles.

## Correct Usage

### Main / Large

``	sx
<Button
  type="Main"
  size="Large"
  label="로그인"
/>
```

### Outlined / Small transaction action

``	sx
<Button
  type="Outlined"
  size="Small"
  label="거래 취소"
/>
```

### Leading and trailing icons

``	sx
<Button
  type="Alternative"
  size="Medium"
  label="지금 바로 확인하기"
  showLeadingIcon={true}
  leadingIcon={<LeadingIcon />}
  showTrailingIcon={true}
  trailingIcon={<ChevronRightIcon />}
/>
```

Icons are caller-provided React nodes. Keep them within the component's 24 × 24 icon slot.

## Verification Checklist

1. Run `npm run build`.
2. Confirm TypeScript rejects unsupported combinations:
   - `<Button type="Main" size="Small" />`
   - `<Button type="Alternative" size="Small" />`
3. Verify default width hugs the label and visible icons.
4. Compare the variant against Figma:
   - Large: 56px height and 24px horizontal padding
   - Medium: 48px height and 24px horizontal padding
   - Outlined Small: 44px height and 16px horizontal padding
   - Radius: 12px
   - Icon/label gap: 8px
5. Verify only semantic CSS variables are referenced by `Button.module.css`.

## System Bypass Examples

The following patterns bypass the Figma contract and must not be used:

``	sx
// Invalid Figma combination: forced with a type assertion.
<Button type="Main" size={"Small" as ButtonSize} label="잘못된 조합" />

// Do not override Figma-controlled size, color, spacing, radius, or border.
<Button
  type="Outlined"
  label="시스템 우회"
  style={{ /* custom visual values */ }}
/>
```

Do not add custom class rules that alter Button height, padding, gap, radius, foreground, background, or border. Create or update the corresponding Figma token and contract first.

## Figma-to-Code Mapping

| Figma property | Code prop | Notes |
| --- | --- | --- |
| Type | `type` | Same value casing: Main / Alternative / Outlined |
| Size | `size` | Sparse combinations are enforced by TypeScript |
| Label | `label` | Text-only string, matching Figma Text Property |
| Show Leading Icon | `showLeadingIcon` | Renders no icon slot when false |
| Leading Icon | `leadingIcon` | ReactNode replacement for Figma Instance Swap |
| Show Trailing Icon | `showTrailingIcon` | Renders no icon slot when false |
| Trailing Icon | `trailingIcon` | ReactNode replacement for Figma Instance Swap |
| State | — | Not implemented because current Figma has no State Variant |

## Intentional Non-1:1 Mappings

| Item | Reason |
| --- | --- |
| Figma Instance Swap → `ReactNode` | Figma swaps component instances; React swaps rendered icon nodes. |
| Native button type → `htmlType` | `type` is reserved for the Figma Type Variant, so HTML behavior uses a separate prop. |
| Figma Hug contents → `inline-flex` + `width: fit-content` | This is the corresponding web layout behavior. |
| Figma parent Fill behavior | No Button prop is added. The consumer's parent layout controls width, matching Figma instance resizing. |

## Accessibility Requirements

### Keyboard

- Use the native `<button>` element only.
- Enter and Space must trigger the button through native browser behavior.
- Set `htmlType="submit"` only for form submission; otherwise keep the default `"button"`.
- Use the standard `disabled` HTML attribute only when interaction must be blocked. There is no Figma Disabled visual variant yet, so do not invent a disabled appearance in this component.

### Focus

- Do not remove the browser's visible focus indicator.
- Do not add `outline: none` through `className` or global CSS.
- A custom focus treatment requires an approved Figma focus token and a matching Figma state before it is added here.

### Long text

- The Button uses Figma-equivalent Hug behavior and `white-space: nowrap`.
- Keep labels concise; test the longest localized label in its real parent width.
- Do not force an arbitrary max width, truncate the label, or add a second text line unless Figma defines that behavior first.
