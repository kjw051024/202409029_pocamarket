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

### Top App Bar — Figma `449:138`
- Text: `Title`
- Boolean: `Show Text Action`, `Show Trailing Action`
- Instance Swap: `Leading Icon`, `Trailing Icon`
- Variant: `Layout = BackTitle | Title`
- `Show Text Action` controls the optional text action in BackTitle.
- In `Layout = Title`, `Trailing Icon` swaps the trailing icon directly; Settings and Collectbook no longer require separate layout variants.
- `Show Trailing Action` controls the trailing action visibility.

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

### Navigation Row — Figma `433:170`
- Text: `Title`, `Supporting Text`, `Value`
- Boolean: `Show Leading`, `Show Supporting Text`, `Show Value`, `Show Trailing`, `Muted Surface`, `Show Border`
- Instance Swap: `Leading`, `Trailing`
- Active structure is one standalone component. The old `Style = Outlined | Muted | Plain` set was removed.
- `Muted Surface = false` + `Show Border = true` reproduces Outlined.
- `Muted Surface = true` + `Show Border = false` reproduces Muted.
- `Muted Surface = false` + `Show Border = false` reproduces Plain.
- The unified component height is 68px; the former 70px Outlined height came from the root border treatment rather than a separate size role.

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

### Artist / Member Item — Figma `445:148`
- Text: `Label`
- Instance Swap: `Thumbnail`
- Boolean: `Selected`
- Active structure is one standalone component. The old `State = Default | Selected` set was removed.
- `Selected = false` reproduces Default; `Selected = true` shows the existing Brand-selected border treatment.

### Product Card / Grid — Figma `173:120`
- Text: `Artist / Member`, `Product Name`, `Price`, `Trade Price`, `Quick Buy Price`
- Instance Swap: `Media`
- Boolean: `Show Favorite`, `Show Quick Buy Badge`
- Variant: `Size = Compact | Regular`
- Size is kept as a variant because information hierarchy and dimensions differ.
- The specifications below describe the current Main Component variants, not page-instance size overrides.

| Main Variant | Node | Actual Width × Height | Product Media / nested Media | Root Padding (all sides) | Root Fill | Root Stroke / Border | Root Radius | Root Gap |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Compact | `173:104` | 104×208px | 104×104px | 0px | None | None (`strokes = []`) | 12px | 8px |
| Regular | `76:22` | 184×272px | 160×160px | 12px | `Surface/Neutral/Primary` | None (`strokes = []`) | 12px | 8px |

- Compact root uses horizontal Hug contents and a fixed height; 104px is its current Main Component width. Regular root uses fixed width and height.
- Both variants have a vertical root Auto Layout. Their Content frame uses horizontal Fill and vertical Hug contents, with a 4px internal gap.
- Root gap is bound to `Spacing/8`; Content gap is bound to `Spacing/4` in both variants.
- Regular root Fill is bound to `Surface/Neutral/Primary`. Compact root has no Fill binding. Neither variant has a root Stroke/Border paint or binding.
- Root padding and root radius currently have no Variable bindings. Their actual values are listed in the table.
- Product Media and nested Media corners are bound to `Radius/12`. The default nested Media Fill is bound to `Surface/Neutral/Secondary`.
- Existing text bindings remain: Product Name and Main Price use `Foreground/Neutral/Primary`; Artist / Member, Trade Price, and Quick Buy Price use `Foreground/Neutral/Secondary`.
- Existing text typography bindings remain: metadata uses `FontSize/14`, `FontWeight/Regular`, `LineHeight/20`, and `LetterSpacing/0`; Main Price uses `FontSize/16`, `FontWeight/SemiBold`, `LineHeight/24`, and `LetterSpacing/0`.
- Existing nested asset bindings remain: Favorite size uses `Dimension/44`; its Icon slot uses `Dimension/24` and inverse icon semantics. Quick Buy Badge uses `Surface/Feature/Primary`, `Spacing/4` gap, `Spacing/8` horizontal padding, `Dimension/24` height, and `Radius/12` on its bottom-left corner.

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

### Message Row — Figma `429:154`
- Text: `Message`, `Time`, `Read Status`
- Boolean: `Show Read Status`
- Variant: `Direction = Sent | Received`
- Message Bubble and Chat Message Meta are internal layers of Message Row and are no longer separate active components.
- `Direction` remains a variant because the child order changes: Sent uses Meta → Bubble, while Received uses Bubble → Meta.
- Sent and Received keep their existing bubble surface, foreground, corner, and meta styling.

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
