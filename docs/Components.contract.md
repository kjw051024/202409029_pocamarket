# Components Contract

Figma is the source of truth for every component listed here. This file covers the current active UI components other than Button.

- Button: see `docs/Button.contract.md`
- Tokens: see `DESIGN.md` and `tokens.json`
- Code implementation: Button only. All components below currently have no code implementation unless noted.
- Do not infer React props, new variants, new states, or new tokens from this document.
- `Icon/*`, `Heart/*`, and `Social Logo/*` are asset components and are documented only as swap targets.

## Property rule

- Variant: structural/state/size/style/direction/provider differences.
- Boolean: show/hide an optional layer.
- Text: editable copy.
- Instance Swap: replace an icon, media, action, or child component.
- Do not add a variant when an existing Boolean, Text, or Instance Swap property can express the change.

## Actions

### Text Button — Figma `36:12`
- Text: `Label`
- Variant: `Emphasis = Secondary | Primary`
- Variant: `Decoration = None | Underline`

### Icon Button — Figma `413:150`
- Instance Swap: `Icon`
- Boolean: `Show Container`
- Active structure is one standalone component. The old `Style = Ghost | Outlined` set was removed.
- `Show Container = false` reproduces Ghost; `Show Container = true` reproduces Outlined.
- The Container keeps the existing Surface/Neutral/Primary, Border/Neutral/Primary, and Radius/999 Variable bindings.

### Floating Icon Button — Figma `33:3`
- Instance Swap: `Icon`

### Toggle Icon Button — Figma `59:15`
- Variant: `State = Default | Selected`
- Variant: `Contrast = Neutral | Inverse`
- The removed unused arbitrary Icon swap is not part of the active contract.

## Inputs & Filters

### Search Field — Figma `71:14`
- Text: `Placeholder`
- Instance Swap: `Leading Icon`

### Filter Chip — Figma `387:173`
- Text: `Label`
- Boolean: `Show Leading Icon`
- Boolean: `Show Trailing Icon`
- Instance Swap: `Leading Icon`
- Instance Swap: `Trailing Icon`
- Active structure is one standalone component. The redundant one-value `State=Default` component set was removed.

## Labels & Status

### Badge — Figma `72:34`
- Text: `Label`
- Variant: `Tone = Brand | Neutral | Feature`

### Info Tag — Figma `72:28`
- Text: `Label`

### Carousel Page Indicator — Figma `109:81`
- Text: `Current`
- Text: `Total`

## Navigation

### Top App Bar — Figma `97:73`
- Text: `Title`
- Boolean: `Show Text Action`
- Instance Swap: `Leading Icon`
- Instance Swap: `Trailing Action`
- Variant: `Layout = BackTitle | TitleAction | Collectbook`
- `Show Text Action = false` reproduces BackTitle; `Show Text Action = true` reproduces the removed BackTitleAction state.
- TitleAction and Collectbook remain variants because their internal Icon Button icon is not exposed as a writable Top App Bar Property.

### Bottom Navigation — Figma `99:53`
- Instance Swap: `Home Item`
- Instance Swap: `Explore Item`
- Instance Swap: `AI Sell Item`
- Instance Swap: `Collect Book Item`
- Instance Swap: `My Page Item`

### Bottom Navigation Item — Figma `73:23`
- Text: `Label`
- Instance Swap: `Icon`
- Variant: `State = Default | Selected`

### Tab Item — Figma `86:48`
- Text: `Label`
- Variant: `State = Default | Selected`

### Navigation Row — Figma `119:112`
- Text: `Title`, `Supporting Text`, `Value`
- Boolean: `Show Leading`, `Show Supporting Text`, `Show Value`, `Show Trailing`
- Instance Swap: `Leading`, `Trailing`
- Variant: `Style = Outlined | Muted | Plain`

### Section Header — Figma `119:116`
- Text: `Title`
- Boolean: `Show Action`
- Instance Swap: `Action`
- Variant: `Size = Medium | Large`

### Home Header / SearchActions — Figma `320:160`
- No public Component Property is currently defined.

## Content

### Shortcut Item — Figma `171:108`
- Text: `Label`
- Instance Swap: `Media`, `Badge`
- Boolean: `Show Badge`
- Variant: `Size = Regular | Compact`

### Artist / Member Item — Figma `78:42`
- Text: `Label`
- Instance Swap: `Thumbnail`
- Variant: `State = Default | Selected`

### Product Card / Grid — Figma `173:120`
- Text: `Artist / Member`, `Product Name`, `Price`, `Trade Price`, `Quick Buy Price`
- Instance Swap: `Media`
- Boolean: `Show Favorite`, `Show Quick Buy Badge`
- Variant: `Size = Compact | Regular`
- Size is kept as a variant because information hierarchy and dimensions differ.

### Product Card / List — Figma `390:173`
- Boolean: `Show Quick Buy Badge`, `Show Quick Buy Price`, `Show Favorite`
- Instance Swap: `Media`
- Text: `Artist / Member`, `Product Name`, `Price`, `Quick Buy Price`
- Active structure is one standalone component. The old `Layout=Default | QuickBuy` set was removed.
- Quick Buy Badge visibility is controlled by `Show Quick Buy Badge` instead of a Layout variant.

### Selectable Card — Figma `78:43`
- Text: `Label`
- Instance Swap: `Leading`

### Media Placeholder — Figma `70:15`
- Instance Swap: `Media`

## States & Feedback

### Empty State — Figma `78:48`
- Text: `Message`
- Instance Swap: `Illustration`, `Action`
- Boolean: `Show Action`

### Summary Item — Figma `78:63`
- Text: `Label`, `Value`

### Summary Card — Figma `104:75`
- Text: `Title`

## Trade & Chat

### Trade Header — Figma `198:124`
- Instance Swap: `Media`, `Left Action`, `Right Action`
- Text: `Product Name`, `Price`, `Shipping`, `Status Label`, `Trade Number`, `Left Action Label`, `Right Action Label`
- Variant: `Status = InProgress | Completed`
- Status remains a variant because the structure changes between states.

### Message Bubble — Figma `78:62`
- Text: `Message`
- Variant: `Direction = Sent | Received`

### Message Row — Figma `121:115`
- Text: `Message`, `Time`, `Read Status`
- Boolean: `Show Read Status`
- Variant: `Direction = Sent | Received`
- Do not infer additional nested-property wiring beyond the public schema currently exposed by Figma.

### Chat Message Meta — Figma `104:89`
- Text: `Read Status`, `Time`
- Boolean: `Show Read Status`

### Chat Date Divider — Figma `101:86`
- Text: `Date`

## Marketing & Auth

### Promotion Banner — Figma `110:81`
- Instance Swap: `Media`
- Boolean: `Show CTA`, `Show Indicator`
- Text: `CTA Label`

### Social Login Button — Figma `91:51`
- Variant: `Provider = Naver | Kakao | X | Apple`
- Provider remains a variant because the branding/provider identity differs.

## Usage rules

Correct:
- Edit content through Text properties.
- Show/hide optional content through Boolean properties.
- Swap icons/media/actions through existing Instance Swap properties.
- Use only the listed Variant values.
- Preserve existing Figma Variable bindings.

Do not:
- Create a variant only to change copy.
- Duplicate a component only to show/hide an optional icon or badge.
- Create icon-specific variants where an Instance Swap exists.
- Add undefined states or variants.
- Hardcode a value that is already represented by an approved token.

## Token and accessibility notes

Use the currently bound Figma Variables and the approved definitions in `DESIGN.md` / `tokens.json`. If an exact per-layer binding is not listed here, Figma remains the source of truth.

Only accessibility requirements explicitly present in an existing contract or implementation should be treated as approved system rules. Do not invent additional accessibility props or states.
